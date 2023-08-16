import { UserController } from "../../controllers/UserController";
import { UserService } from '../../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../mockResponse.mock";

export const nothingNameCreateController = () => {
    return (
        describe('UserController', () => {
            const mockUserService: Partial<UserService> = {
                createUser: jest.fn()
            }
        
            const userController = new UserController(mockUserService as UserService);
        
            it('Deve dar erro por não ter usuário não ter informado o nome', () => {
                const mockRequest = {
                    body: {
                        name: '',
                        email: 'maria@mimb.com'
                    }
                } as Request
            
                const mockResponse = makeMockResponse()
                userController.createUser(mockRequest, mockResponse)
                expect(mockResponse.state.status).toBe(400)
                expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name e E-mail obrigatório'})
            })
        })
    )
}
