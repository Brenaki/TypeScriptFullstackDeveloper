import { DioAccount } from "./DioAccount"

export class AdmAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
      this.balance = 0
    }
    
    deposit = (value: number): void => {
        if(this.validateStatus()){
          this.balance = value + 10
          console.log(`Você depositou R$ ${value},00`)
        }
      }
  
  }