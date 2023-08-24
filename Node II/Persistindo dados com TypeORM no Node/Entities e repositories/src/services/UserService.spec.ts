import { UserService } from "../services/UserService";
jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
    initialize: jest.fn()
})
const mockUserRepository  = require('../repositories/UserRepository')

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

