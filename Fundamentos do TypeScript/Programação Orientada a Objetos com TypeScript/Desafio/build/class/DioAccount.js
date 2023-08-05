"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
class DioAccount {
    constructor(name, accountNumber) {
        this.balance = 0;
        this.status = true;
        this.getName = () => {
            return this.name;
        };
        this.deposit = (value) => {
            if (this.validateStatus()) {
                this.balance = value;
                console.log(`Você depositou R$ ${value},00`);
            }
        };
        this.withdraw = (value) => {
            if (this.status == true && this.balance >= value) {
                console.log(`Você sacou R$ ${value},00`);
                this.balance -= value;
            }
            else if (this.status == false) {
                console.log('Sua conta está desativada!');
            }
            else {
                console.log(`Saldo o suficiente`);
            }
        };
        this.getBalance = () => {
            console.log(`Saldo Atual: R$ ${this.balance},00\n`);
        };
        this.validateStatus = () => {
            if (this.status) {
                return this.status;
            }
            else if (!this.status) {
                return this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
exports.DioAccount = DioAccount;
