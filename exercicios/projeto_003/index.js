//Representa uma transação financeira.
const prompt = require("prompt-sync")();

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
        return this.value >= 0 ? 'in' : 'out';
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
    
    this.transactions.forEach((transaction, index) => {
        //pega os objetos dentro de filteredTransactions e faz um log.
        console.log(
          `${index+1}º Operation:${transaction.type}, Description: ${transaction.description}, Value: ${
            transaction.value
          }, Date: ${transaction.day}.`
        );
      });
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
    this.categories.forEach((element, index) =>
      console.log(`${index + 1}º Category: ${element.name}`)
    );
    console.log("");
  }

  displayGoals() {
    console.log("• Goals:");
    this.goals.forEach((goal, index) =>
      console.log(
        `${index + 1}º Goal: ${goal.description} - Progress: ${
          goal.progress
        } of ${goal.valueGoal}`
      )
    );
    console.log("");
  }

  generateFinancialReport() {
    console.log("-----Financial Report------");
    console.log("");
    this.displayCategories();
    this.displayGoals(); //ok
    this.displayTransactions();
    this.calculateBalance()
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
    "Rent",
    1000,
    categoryHousing,
    new Date("01-05-2023")
  );

//financialManager
const financialManager = new FinanceManager();

//addCatergory - add instances of Category
financialManager.addCategory(categorySalary);
financialManager.addCategory(categoryHousing);
financialManager.addCategory(categoryFood);
console.log("");

//addTransacation - add instances of Transaction
financialManager.addTransaction(transaction1);
financialManager.addTransaction(transaction2);
financialManager.addTransaction(transaction3);
financialManager.addTransaction(transaction4)
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
financialManager.displayCategories();

//Progress update - select the goal and the value.
console.log("Updated Progress:")
financialManager.updateGoalProgress(travelGoal, transaction4);

console.log("");

//mostrar todas as informacoes e status realizados
financialManager.generateFinancialReport();

// * com prompt

// let parar = false

// while(!parar) {
//   const operacao = Number(prompt('O que gostaria de fazer [add=0, del=1, list=2, sair=3]?'));

//   if(operacao === 0) {
//     const livroNome = prompt('Qual nome do livro? ');
//     const autorLivro = prompt('Qual nome do livro? ');
//     biblioteca.adicionar(new Livro(livroNome, autorLivro))
//   }else if(Number(operacao) === 1) {
//     const livroTitulo = prompt('Qual nome do livro? ');
//     biblioteca.remover(livroTitulo)
//   } else if(Number(operacao) === 2) {
//     biblioteca.listar()
//   }else if(Number(operacao) === 3)  {
//     parar = true
//     console.log("saiu")
//   }
// }
