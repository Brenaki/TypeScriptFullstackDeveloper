"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyAccount_1 = require("../src/class/CompanyAccount");
const PeopleAccount_1 = require("../src/class/PeopleAccount");
const AdmAccount_1 = require("../src/class/AdmAccount");

const peopleAccount = new PeopleAccount_1.PeopleAccount(1, 'Nath', 10);
const companyAccount = new CompanyAccount_1.CompanyAccount('DIO', 20);
const dioAccount = new AdmAccount_1.AdmAccount('Victor', 13);

console.log(`People Account`);
// Person Account 
peopleAccount.getName();
peopleAccount.deposit(23);
peopleAccount.withdraw(24);
peopleAccount.getBalance();
peopleAccount.withdraw(10);
peopleAccount.getBalance();

console.log(`Company Account`);
// Company Account
companyAccount.getName();
companyAccount.getLoan(40);
companyAccount.getBalance();
companyAccount.withdraw(20);
companyAccount.getBalance();

console.log(`Adm Account`);
// Admin Account
dioAccount.getName();
dioAccount.deposit(100);
dioAccount.getBalance();
dioAccount.withdraw(10);
dioAccount.getBalance();
