import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AdmAccount } from './class/DioAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const dioAccount: AdmAccount = new AdmAccount('Victor', 13)

// Person Account 
peopleAccount.deposit(23)
peopleAccount.withdraw(24)
peopleAccount.getBalance()
peopleAccount.withdraw(10)
peopleAccount.getBalance()

// Company Account
companyAccount.getLoan(40)
companyAccount.getBalance()