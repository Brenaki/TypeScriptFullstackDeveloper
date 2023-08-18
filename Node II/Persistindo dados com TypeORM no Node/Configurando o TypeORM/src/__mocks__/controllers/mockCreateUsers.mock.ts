import { UserController } from "../../controllers/UserController";
import { UserService } from '../../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../mockResponse.mock";

export const createUserController = () => {
    return (
        describe('UserController', () => {
            const mockUserService: Partial<UserService> = {
                createUser: jest.fn()
            }
            
            const userController = new UserController(mockUserService as UserService);
        
            it('Deve adicionar um novo usuário', () => {
                const mockRequest = {
                    body: {
                        name: 'Nath',
                        email: 'nath@test.com'
                    }
                } as Request
                const mockResponse = makeMockResponse()
                userController.createUser(mockRequest, mockResponse)
                expect(mockResponse.state.status).toBe(201)
                expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
            })
        })
    )
}