// Aula 6
const lista: number[] = [4,7,5,2,1,2,4,5,6,21,3,543,12,32,13,3,45,45,6,2,21,4,6,5]
const listaN: string[] = ['Victor', 'Tina', 'Maria', 'João', 'Gustavo', 'Vinicius', 'Carlos']

const buscaNum = lista.find(num => num >6)

console.log(buscaNum)


// for each 

console.log(listaN)

listaN.forEach(str => {
    if (str[0] == 'G' && str[str.length-1] == 'o'){
        console.log(str)
    }
})

// map

listaN.map(str => {
    if (str[0] == 'V' && str[str.length-1] == 's'){
        console.log(str)
    }
})