import { User, UserService } from "../../services/UserService";

export const nothingEmailCreateService = () => {
    return (
        describe('UserService', () => {
            const mockDb: User[] = []
            const userService = new UserService(mockDb);
        
            it('Deve dar erro por não ter usuário não ter informado o email', () => {
                const mockConsole = jest.spyOn(global.console, 'log')
                userService.createUser('Victor Angelo', '');
                expect(mockConsole).toHaveBeenCalledWith('Invalid! Missing information')
            })
        })
    )
}