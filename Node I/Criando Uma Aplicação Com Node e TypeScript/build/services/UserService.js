"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db = [
    {
        name: "Vini",
        surname: "Legat",
        email: "Vinlgat@gmail.com"
    }
];
class UserService {
    constructor() {
        this.createUser = (name, surname, email) => {
            const user = {
                name,
                surname,
                email
            };
            db.push(user);
            console.log('DB Atualizado', db);
        };
        this.getAllUsers = () => {
            return db;
        };
    }
}
exports.UserService = UserService;
