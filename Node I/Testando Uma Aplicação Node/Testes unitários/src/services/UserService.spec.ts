import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it("Deve adicionar um novo usuários", () => {
        const mockConsole = jest.spyOn(global.console, "log")
        userService.createUser("Victor", "Cerqueira", "victor.cerqueira@test.com");
        expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDb)
    })  
})