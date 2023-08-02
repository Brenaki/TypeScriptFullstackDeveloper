export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  protected status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = value
      console.log(`Você depositou R$ ${value},00`)
    }
  }

  withdraw = (value: number): void => {
    if (this.status == true && this.balance>= value){
      console.log(`Você sacou R$ ${value},00`)
      this.balance -= value
  }
  else if (this.status == false){
    console.log('Sua conta está desativada!')
  }
  else{
    console.log(`Saldo o suficiente`)
  }
  }

  getBalance = (): void => {
    console.log(`Saldo Atual: R$ ${this.balance},00\n`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    else if (!this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

export class AdmAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }


}
