import { UserService } from "../services/UserService";
import * as jwt from 'jsonwebtoken';

jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
    initialize: jest.fn()
})
jest.mock('jsonwebtoken')

const mockUserRepository  = require('../repositories/UserRepository')
const mockUser = {
    id_user: '12345',
    name: 'nath',
    email: 'nath@gmail.com',
    password: '123456'
}

    describe('UserService', () => {
    const userService = new UserService(mockUserRepository)
        
    it('Deve adicionar um novo usuário', async () => {
            mockUserRepository.createUser = jest.fn().mockImplementation(() => { return Promise.resolve(mockUser)
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

    it('Devo retornar um token de user',async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('nath@gmail.com', '12345')
        expect(token).toBe('token')
    })

    it('Deve retorna um erro, caso o user não esteja correto',async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('paper@gmail.com', '54321')).rejects.toThrowError(new Error("Invalid credentials"))
    })
})

