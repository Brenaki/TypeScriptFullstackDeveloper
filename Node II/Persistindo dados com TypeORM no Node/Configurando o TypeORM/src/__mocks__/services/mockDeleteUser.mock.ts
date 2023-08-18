import { User, UserService } from "../../services/UserService";

export const deleteUsersService = () => {
    return (
        describe('UserService', () => {
            const mockDb: User[] = []
            const userService = new UserService(mockDb);
        
            it('Deve deletar um usuário', () => {
                const mockConsole = jest.spyOn(global.console, 'log')
                userService.deleteUser('Joana', 'joana@dio.com');
                expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
            })
        })
    )
}