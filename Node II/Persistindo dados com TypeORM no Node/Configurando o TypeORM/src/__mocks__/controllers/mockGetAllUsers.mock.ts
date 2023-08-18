import { UserController } from "../../controllers/UserController";
import { UserService } from '../../services/UserService'
import { makeMockResponse } from "../mockResponse.mock";

export const getAllUsersController = () => {
    return (
        describe('UserController', () => {
            const mockUserService: Partial<UserService> = {
                getAllUsers: jest.fn()
            }
        
            const userController = new UserController(mockUserService as UserService);
        
            it('Deve listar todos os usuários', () => {
                const mockResponse = makeMockResponse()
                userController.getAllUsers(mockResponse)
                expect(mockResponse.state.status).toBe(200)
            })
        })
    )
}
