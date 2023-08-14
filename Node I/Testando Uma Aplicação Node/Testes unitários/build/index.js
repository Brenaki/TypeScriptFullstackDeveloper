"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(routes_1.router);
server.get('/', (request, response) => {
    return response.status(200).json({ message: 'Hello world' });
});
server.listen(5000, () => console.log('Server On'));
