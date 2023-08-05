"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class AdmAccount extends DioAccount_1.DioAccount {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.deposit = (value) => {
            if (this.validateStatus()) {
                this.balance = value + 10;
                console.log(`Você depositou R$ ${value},00`);
            }
        };
        this.balance = 0;
    }
}
exports.AdmAccount = AdmAccount;
