const { printTable } = require('console-table-printer');

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const today = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${today}`;
}

class MonetaryElement {
  constructor(description) {
    if (typeof description !== "string")
      throw new Error("Description is not a valid text.");
    this.description = description;
  }
}

class Category {
  constructor(name) {
    this.name = name;
  }
}

class Transaction extends MonetaryElement {
  constructor(description, value, category, day) {
    super(description);
    this.value = value;
    this.category = category; //ser um objeto
    this.day = formatDate(day);
    this.type = this.determineTransactionType();
    }

    determineTransactionType() {
        return this.value >= 0 ? 'income' : 'expense';
    }
  }


class FinancialGoal extends MonetaryElement {
    transactions = []
    constructor(description, valueGoal, progress) {
    super(description);

    if (isNaN(valueGoal) || isNaN(progress) || valueGoal <= 0 || progress < 0) {
      throw new Error(
        "Value Goal and initial progress must be valid positive numbers."
      );
    }
    if (progress > valueGoal) {
      throw new Error("Initial progress cannot exceed the target value.");
    }
    this.valueGoal = valueGoal;
    this.progress = progress; //progress value
  }

  addValueToProgress(value) {
    this.progress += value;
  }

  addTransaction(transaction){
    this.transactions.push(transaction)
  }

  getCurrentProgressPercentage() {
    const progressPercentage = (this.progress / this.valueGoal) * 100;
    return progressPercentage;
  }
}

class FinanceManager {
  transactions = [];
  categories = [];
  goals = [];

  //  recebe uma instancia de transaction
  addTransaction(transaction) {
    this.transactions.push(transaction);
    console.log(
      `Transaction added: ${transaction.description}, Value: ${transaction.value}, Date: ${transaction.day}.`
    );
  }

  addCategory(category) {
    this.categories.push(category);
    console.log(`Category added: ${category.name}.`);
  }

  addGoal(goal) {
    this.goals.push(goal);
    console.log(`Goal added: ${goal.description}.`);
  }

  calculateBalance() {
    let totalBalance = 0;
    this.transactions.forEach((element) => (totalBalance += element.value));

    // retornar a soma do value de todos os objetos dentro do array transactions, usando forEach.
    return totalBalance;
  }
  displayTransactions(){
    console.log("• Transactions:")
    if(this.transactions.length === 0){
        console.log("No transactions foun.")
    } else {

        const sortedTransactions = this.transactions.sort((a,b) => new Date(a.day) - new Date(b.day))
        console.table(sortedTransactions.map((transaction) => ({
            
            Operation: transaction.type,
            Description: transaction.description,
            Value: transaction.value,
            Date: transaction.day,
           
        })));
    }
    
  }
  //passa um objeto e eu devo devolver as posicoes que estao no meio dos dias enviados.
  displayTransactionsWithRange(dateRange) {
    
    const { start, end } = dateRange;
    const startDate = formatDate(start);
    const endDate = formatDate(end);
    const filteredTransactions = this.transactions.filter((transaction) => { //armazena os objetos encontrados
      return transaction.day >= startDate && transaction.day <= endDate;
    });

    if (filteredTransactions.length === 0) {
      //caso dentro do filteredTransactions nao tenha nada.
      console.log("No transactions found within the specified date range.");
    } else {
      console.log(`• Transactions within the specified date range (${startDate} to ${endDate}):`);
      filteredTransactions.forEach((transaction, index) => {
        //pega os objetos dentro de filteredTransactions e faz um log.
        console.log(
          `${index+1}º Description: ${transaction.description}, Value: ${
            transaction.value
          }, Date: ${transaction.day}.`
        );
      });
    }
    console.log("");
  }

  displayCategories() {
    console.log("• Categories:");
    const formattedCategories = this.categories.map(category => ({ Category: category.name }));
    
    console.table(formattedCategories)


    console.log("");
  }

  displayGoals() {
    console.log("• Goals:");
     
    this.goals.forEach((goal, index) => {

        const progressPercentage = (goal.progress / goal.valueGoal) * 100;  
    console.log(
        `${index + 1}º Goal: ${goal.description} | Progress: ${
          goal.progress
        } of ${goal.valueGoal} (${progressPercentage.toFixed(2)}%)`
      )
    }
    
    );
    console.log("");
  }

  generateFinancialReport() {
    console.log("-----Financial Report------");
    console.log("");
    this.displayCategories();
    this.displayTransactions();
    console.log(
      `Total Balance: R$ ${financialManager.calculateBalance().toFixed(2)}`
    );
    console.log("")
    this.displayGoals(); //ok
    
    
      console.log("");
  }

  updateGoalProgress(goal, transaction) {
    
    if (!(goal instanceof FinancialGoal)) {
      //quando usamos o if nós ajudamos o VScode a entender qual tipo ele irá receber no paramentro.
      throw new Error("Invalid goal instance.");
    }
    goal.addValueToProgress(transaction.value);

    goal.addTransaction(transaction)

    const progressPercentage = goal.getCurrentProgressPercentage();
    console.log(
      `Update for the goal "${goal.description}": ${goal.progress} of ${goal.valueGoal}`
    );
    console.log(`Progress percentage: ${progressPercentage.toFixed(2)}%`);
  }
}

//category
const categorySalary = new Category("Salary");
const categoryHousing = new Category("Housing");
const categoryFood = new Category("Food");
const categoryTravelGoal = new Category("Travel Goal");

//goal
const travelGoal = new FinancialGoal("Disney Trip", 10000, 0);
const CarGoal = new FinancialGoal("Buy a car", 50000, 0);

//transaction
const transaction1 = new Transaction(
  "Groceries",
  -50,
  categoryFood,
  new Date("01-01-2023")
);
const transaction2 = new Transaction(
  "Salary",
  2000,
  categorySalary,
  new Date("12-01-2022")
);
const transaction3 = new Transaction(
  "Rent",
  -1000,
  categoryHousing,
  new Date("01-05-2023")
);
const transaction4 = new Transaction(
    "Travel Goal",
    1000,
    categoryTravelGoal,
    new Date("01-02-2023")
  );
  const transaction5 = new Transaction(
    "Travel Goal",
    200,
    categoryTravelGoal,
    new Date("01-03-2023")
  );

//financialManager
const financialManager = new FinanceManager();

//addCatergory - add instances of Category
financialManager.addCategory(categorySalary);
financialManager.addCategory(categoryHousing);
financialManager.addCategory(categoryFood);
financialManager.addCategory(categoryTravelGoal);
console.log("");

//addTransacation - add instances of Transaction
financialManager.addTransaction(transaction1);
financialManager.addTransaction(transaction2);
financialManager.addTransaction(transaction3);
financialManager.addTransaction(transaction4);
financialManager.addTransaction(transaction5);
console.log("");

//addGoal - add instances of FinancialGol
financialManager.addGoal(travelGoal);
financialManager.addGoal(CarGoal);
console.log("");

// Exibir saldo total
console.log(
  `Total Balance: R$ ${financialManager.calculateBalance().toFixed(2)}`
);
console.log("");

// Exibir transações do mês de fevereiro
financialManager.displayTransactionsWithRange({
  start: new Date("12-01-2022"),
  end: new Date("01-05-2023"),
});

// Exibir categorias disponíveis
// financialManager.displayCategories();

//Progress update - select the goal and the value.
console.log("Updated Progress:")
financialManager.updateGoalProgress(travelGoal, transaction4);
financialManager.updateGoalProgress(travelGoal, transaction5);
console.log("");

//mostrar todas as informacoes e status realizados
financialManager.generateFinancialReport();

