import { User, UserService } from "../../services/UserService";

export const getAllUsersService = () => {
    return (
        describe('UserService', () => {
            const mockDb: User[] = []
            const userService = new UserService(mockDb);
        
            it('Deve listar todos os usuários', () => {
                const mockConsole = jest.spyOn(userService, 'getAllUsers')
                userService.getAllUsers()
                expect(mockConsole).toHaveBeenCalled()
            })
        })
    )
}