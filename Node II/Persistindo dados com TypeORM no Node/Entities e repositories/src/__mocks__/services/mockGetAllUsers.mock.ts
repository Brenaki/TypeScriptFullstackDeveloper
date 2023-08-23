import { UserService } from "../../services/UserService";
jest.mock('../../repositories/UserRepository')

const mockUserRepository  = require('../../repositories/UserRepository')

export const getUserService = () => {
    return (
        describe('UserService', () => {
            const userService = new UserService(mockUserRepository)
        
            it('Deve listar o usuário solicitado', async () => {
                mockUserRepository.getUser = jest.fn().mockImplementation(() => { return Promise.resolve({
                    id_user: '12345'
                })
            })
            const response = await userService.getUser('12345')
            expect(mockUserRepository.getUser).toHaveBeenCalled()
            expect(response).toMatchObject({
                id_user: '12345',
            })
            })
        })
    )
}