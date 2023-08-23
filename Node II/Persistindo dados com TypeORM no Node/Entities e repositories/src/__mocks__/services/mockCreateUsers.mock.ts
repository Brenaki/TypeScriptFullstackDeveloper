import { UserService } from "../../services/UserService";
jest.mock('../../repositories/UserRepository')

const mockUserRepository  = require('../../repositories/UserRepository')

export const createUsersService = () => {
    return (
        describe('UserService', () => {
            const userService = new UserService(mockUserRepository)
        
            it('Deve adicionar um novo usuário', async () => {
                mockUserRepository.createUser = jest.fn().mockImplementation(() => { return Promise.resolve({
                    id_user: '12345',
                    name: 'nath',
                    email: 'nath@gmail.com',
                    password: '123456'
                })
            })
                const response = await userService.createUser('nath', 'nath@test.com', '12345');
                expect(mockUserRepository.createUser).toHaveBeenCalled()
                expect(response).toMatchObject({
                    id_user: '12345',
                    name: 'nath',
                    email: 'nath@gmail.com',
                    password: '123456'
                })
            })
        })
    )
}