import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
      // let user0 = createUser('victor@prisma.io', 18, 'Victor')
      // let user1 = createUser('maria@prisma.io', 16, 'Maria')      
      // let user2 = createUser('pedro@prisma.io', 19, 'Pedro')      
      // let user3 = createUser('vinicius@prisma.io', 18, 'Vinicius')      
      
      // console.log('Creating users:')
      // console.log(user0,user1,user2,user3)
     
      countUsers()
      countUsersM()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

async function countUsers() {
    const users = await prisma.user.findMany()
    console.log('Count users:')
    console.log(users)
}

async function countUsersM() {
    const users = await prisma.user.findMany(
        {where:{age: 18}}
    )
    console.log('Count users +18:')
    console.log(users)
}

async function createUser(email:string, age:number, name?: string){
    const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          age: age
        },
      })
    return user
}