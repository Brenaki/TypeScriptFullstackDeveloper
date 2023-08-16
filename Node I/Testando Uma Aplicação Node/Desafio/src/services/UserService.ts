export interface User {
    name: string
    email: string
}

export const db = [
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
        if(name && email) {
            const user = {
                name,
                email
            }
    
            this.db.push(user)
            console.log('DB atualizado', this.db)
        }
        else {
            console.log('Invalid! Missing information')
        }
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (name: string, email: string) => {
        if(name && email) {
            const user = {
                name,
                email
            }
            
            this.db.map((val, key) => {
                if(val.name == user.name && val.email == user.email) {
                    this.db.splice(key, 1)
                }
            })
    
            console.log('DB atualizado', this.db)
        }
        else {
            console.log('Invalid! Missing information')
        }
        
        
    }
}

