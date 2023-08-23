import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        if(!user.name?.trim() || !user.email?.trim()) {
            return response.status(400).json({ message: 'Bad request! Name e E-mail obrigatório'})
        }

        this.userService.createUser(user.name, user.email, user.password)
        return response.status(201).json({ message: 'Usuário criado'})
    }

    getUser = (response: Response, request: Request) => {
        const user = request.body
        const find = this.userService.getUser(user.id)
        return response.status(200).json( find )
    } 

    deleteUser = (request: Request, response: Response) => {
        const user = request.body

        if(!user.name && !user.email){
            return response.status(400).json({ message: 'Bad request! Name e E-mail obrigatório'})
        }

        this.userService.deleteUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário deletado'})
    }
}
