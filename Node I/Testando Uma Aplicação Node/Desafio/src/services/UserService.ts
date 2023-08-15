export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.map((val, key) => {
            if(val.name === user.name && val.email === user.email) {
                this.db.splice(key, 1)
            }
        })

        console.log('DB atualizado', user)
    }
}

