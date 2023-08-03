// Dio Banking

// name, accountNumber
// depositar, sacar

class Account{
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Você depositou')
    }

    withdraw = () => {
        console.log('Você sacou')
    }
}

const newAccount: Account = new Account('Victor', 13)
console.log(newAccount)

const account: Account = new Account('Pedro', 17)
account.deposit()