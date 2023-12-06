class Client{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.accounts = []; //array de constas.
    }
    //metodo que pega o parametro e armazena dentro do array accounts.
    openAccount(account) {
        this.accounts.push(account);
    }
}

//Account vai criar o esqueleto para que eu possa usar dentro da conta corrente e poupanca.
class Account{
    constructor(client) {
        this.client = client;
        //inicialização do balanço.
        this.balance = 0;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposit of ${amount} made. New Balance ${this.balance}`)
    }

    checkBalance(){
        console.log(`Current balance: ${this.balance}`)
    }

    //metodo virtual que será implementado nas classes checkingaccount e savingsaccount.
    withdraw(amount) {
        // lanca um erro caso alguem tente chamar esse metodo dentro da classe Account.
        throw new Error("'withdraw' method must be implemented in derived classes.");
    }

}

//extends é utilizado para poder utilizar todos os atributos e metodos publicos dentro da classe.
//ChekkingAccount passa a ser filha de Account. Posso chamar os metodos diretamente na classe.
class CheckingAccount extends Account {
    withdraw(amount) {
        //se o balanco for maior que o valor de retirada. tire o valor do balanco
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} made. New balance: ${this.balance}`);
        } else {
            //caso o valor seja maior que o balanço.
            console.log("Insufficient balance for withdrawal.");
        }
    }
}

class SavingsAccount extends Account {
   
}


//instancia de Client
const client1 = new Client("Rodrigo", 42)
//conta corrente do cliente1 (instancia de checkingAccount)
const checkingAccount1 = new CheckingAccount(client1);
//conta poupanca do cliente1 (instancia de SavingsAccount)
const savingsAccount1 = new SavingsAccount(client1);

//armazena o objeto {chekingAccount1} no array accounts.
client1.openAccount(checkingAccount1);
//armazena o objeto {savingsAccount1} no array accounts.
client1.openAccount(savingsAccount1);
