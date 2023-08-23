import { UserController } from "../../controllers/UserController";
import { UserService } from '../../services/UserService'
import { makeMockResponse } from "../mockResponse.mock";
import { makeMockRequest } from "../mockRequest.mock";

export const getAllUsersController = () => {
    return (
        describe('UserController', () => {
            const mockUserService: Partial<UserService> = {
                getUser: jest.fn()
            }
        
            const userController = new UserController(mockUserService as UserService);
        
            it('Deve listar todos os usuários', () => {
                const mockRequest = {
                    body: {
                        user_id: '12345'
                    }
                } 
                const mockResponse = makeMockResponse()
                userController.getUser(mockResponse, mockRequest)
                expect(mockResponse.state.status).toBe(200)
            })
        })
    )
}
