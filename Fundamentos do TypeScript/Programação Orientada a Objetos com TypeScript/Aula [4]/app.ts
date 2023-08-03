// Dio Banking

// name, accountNumber
// depositar, sacar

class Account{
    name: string
    accountNumber: number
    balance: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = 0
    }

    getValue = () => {
        console.log(this.balance)
    }

    deposit = () => {
        console.log('Você depositou')
    }

    withdraw = () => {
        console.log('Você sacou')
    }
}

// Class Asbract

class PeopleAccount extends Account{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

// Herança
//class Admin extends Account{
//    balance: number
//    constructor(name: string, accountNumber: number) {
//        super(name, accountNumber)
//        this.balance = 0
//    }
//     getValue = () => {
//          console.log(this.balance)
//}    }
//}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Victor', 13)
console.log(peopleAccount)