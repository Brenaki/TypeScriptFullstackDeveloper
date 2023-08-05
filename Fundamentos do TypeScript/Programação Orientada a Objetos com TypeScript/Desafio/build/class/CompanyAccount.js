"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class CompanyAccount extends DioAccount_1.DioAccount {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.getLoan = (value) => {
            if (this.status == true) {
                console.log(`Você pegou um empréstimo de R$ ${value},00`);
                this.balance = value;
            }
            else {
                console.log(`Sua conta está desativada!`);
            }
        };
        this.balance = 0;
    }
}
exports.CompanyAccount = CompanyAccount;
