import { UserController } from "../../controllers/UserController";
import { UserService } from '../../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../mockResponse.mock";

export const deleteUserController = () => {
    return (
        describe('UserController', () => {
            const mockUserService: Partial<UserService> = {
                deleteUser: jest.fn()
            }
            
            const userController = new UserController(mockUserService as UserService);
        
            it('Deve deletar um usuário', () => {
                const mockRequest = {
                    body: {
                        name: "Joana",
                        email: "joana@dio.com",
                    }
                } as Request

                const mockResponse = makeMockResponse()

                userController.deleteUser(mockRequest, mockResponse)
                expect(mockResponse.state.status).toBe(201)
                expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado' })
            })
        })
    )
}