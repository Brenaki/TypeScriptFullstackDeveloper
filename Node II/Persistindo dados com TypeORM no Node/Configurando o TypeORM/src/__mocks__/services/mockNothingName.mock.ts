import { User, UserService } from "../../services/UserService";

export const nothingNameCreateService = () => {
    return (
        describe('UserService', () => {
            const mockDb: User[] = []
            const userService = new UserService(mockDb);
        
            it('Deve dar erro por não ter usuário não ter informado o nome', () => {
                const mockConsole = jest.spyOn(global.console, 'log')
                userService.createUser('', 'victor@valc.com');
                expect(mockConsole).toHaveBeenCalledWith('Invalid! Missing information')
            })
        })
    )
}