import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AdmAccount } from './class/AdmAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const dioAccount: AdmAccount = new AdmAccount('Victor', 13)

console.log(`People Account`)
// Person Account 
peopleAccount.getName()
peopleAccount.deposit(23)
peopleAccount.withdraw(24)
peopleAccount.getBalance()
peopleAccount.withdraw(10)
peopleAccount.getBalance()

console.log(`Company Account`)
// Company Account
companyAccount.getName()
companyAccount.getLoan(40)
companyAccount.getBalance()
companyAccount.withdraw(20)
companyAccount.getBalance()

console.log(`Adm Account`)
// Admin Account
dioAccount.getName()
dioAccount.deposit(100)
dioAccount.getBalance()
dioAccount.withdraw(10)
dioAccount.getBalance()
