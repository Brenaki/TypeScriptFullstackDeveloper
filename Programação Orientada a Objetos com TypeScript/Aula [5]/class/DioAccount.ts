// Dio Banking

// name, accountNumber
// depositar, sacar
// Class Asbract

export abstract class DioAccount{
    name: string
    accountNumber: number
    balance: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = 0
    }

    getValue = (): void => {
        console.log(this.balance)
    }

    deposit = (): void => {
        console.log('Você depositou')
    }

    withdraw = (): void => {
        console.log('Você sacou')
    }
}