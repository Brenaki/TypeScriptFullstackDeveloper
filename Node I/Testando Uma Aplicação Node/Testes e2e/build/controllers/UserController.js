"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    constructor() {
        this.createUser = (request, response) => {
            const userService = new UserService_1.UserService;
            const user = request.body;
            if (!user.name) {
                return response.status(400).json({ message: 'Bad request! Required name' });
            }
            userService.createUser(user.name, user.surname, user.email);
            return response.status(201).json({ message: 'Usuário criado' });
        };
        this.getAllUsers = (request, response) => {
            const userService = new UserService_1.UserService;
            const users = userService.getAllUsers();
            return response.status(200).json(users);
        };
    }
}
exports.UserController = UserController;
