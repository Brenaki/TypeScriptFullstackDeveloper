export interface User {
    name: string,
    surname: string,
    email: string
}

const db = [
    {
        name: "Vini",
        surname: "Legat",
        email: "Vinlgat@gmail.com"
    }
]

export class UserService {
    db: User[]

    constructor(database = db) {
        this.db= database
    }

    createUser = (name: string, surname: string, email: string) => {
        const user = {
            name,
            surname,
            email
        }

        this.db.push(user)
        console.log('DB Atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }
}