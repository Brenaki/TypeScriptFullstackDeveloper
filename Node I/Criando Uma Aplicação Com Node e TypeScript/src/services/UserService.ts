const db = [
    {
        name: "Vini",
        surname: "Legat",
        email: "Vinlgat@gmail.com"
    }
]

export class UserService {
    createUser = (name: string, surname: string, email: string) => {
        const user = {
            name,
            surname,
            email
        }

        db.push(user)
        console.log('DB Atualizado', db)
    }

    getAllUsers = () => {
        return db
    }
}