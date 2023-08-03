// const user = {
//    name: 'Victor',
//    age: 18,
//    showname(){
//        console.log(this.name)
//    }
//}

// user.showname()


//

class User {
    name: string 
    age: number 

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user = new User('Victor', 18)
user.showName()
const otheruser = new User('Rickk', 18)
otheruser.showName()