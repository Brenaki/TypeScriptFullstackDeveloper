import { UserController } from "../controllers/UserController";
import { UserService } from '../services/UserService';
import { Request } from 'express';
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

const mockUserService = {
    createUser: jest.fn(),
    getUser: jest.fn()
}

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('UserController', () => {

    const userController = new UserController();
    const mockResponse = makeMockResponse();

    it('Deve retornar usuário criado', () => {
        const mockRequest = {
            body: {
                name: 'nath',
                email: 'nath@example.com',
                password: '12345'
            }
        } as Request;

        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' });
    });

    it('Deve retornar erro caso o usuário não informe o nome', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'nath@test.com',
                password: '12345'
            }
        } as Request;

        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: `Bad request! You're missing something. Please try again` });
    });

    it('Deve retornar erro caso o usuário não informe o email', () => {
        const mockRequest = {
            body: {
                name: 'nath',
                email: '',
                password: '12345'
            }
        } as Request;

        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: `Bad request! You're missing something. Please try again` });
    });

    it('Deve retornar erro caso o usuário não informe a senha', () => {
        const mockRequest = {
            body: {
                name: 'nath',
                email: 'nath@test.com',
                password: ''
            }
        } as Request;

        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: `Bad request! You're missing something. Please try again` });
    });

    it('Deve retornar o usuario com o userId informado', () => {
        const mockRequest = makeMockRequest({
            params: {
                userId: '123456'
            }
        })

        userController.getUser(mockRequest, mockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith('123456')
        expect(mockResponse.state.status).toBe(200)
    })
});
