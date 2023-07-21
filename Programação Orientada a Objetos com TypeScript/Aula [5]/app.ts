import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

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
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('VALC', 26)
console.log(companyAccount)
console.log(companyAccount.deposit())