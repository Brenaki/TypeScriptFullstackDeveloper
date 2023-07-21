import { DioAccount } from "./DioAccount"

// Aula 5

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('Você pegou um empréstimo')
    }

    // Polimorfismo
    deposit = (): number => {
        return 2
    }

}