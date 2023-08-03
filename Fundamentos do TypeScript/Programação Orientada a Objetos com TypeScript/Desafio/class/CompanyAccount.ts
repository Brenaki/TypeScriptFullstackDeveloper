import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
    this.balance = 0
  }

  getLoan = (value: number):  void => {
    if (this.status == true){
      console.log(`Você pegou um empréstimo de R$ ${value},00`)
      this.balance = value
    }
    else{
      console.log(`Sua conta está desativada!`)
    }
  }
}
