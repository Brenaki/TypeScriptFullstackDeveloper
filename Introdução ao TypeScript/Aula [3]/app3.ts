interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string 
}

const pessoa: Pessoa = {
    nome: 'Victor',
    idade: 18,
    profissao: 'Desenvolvedor'
}

const outraPessoa: Pessoa = {
    nome: 'Vinicius',
    idade: 18
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] =[
    1,3,5
]

const arrayStr: string[] = [
    'Pedro', 'Nath', 'Julia'
]

const arrayBol: boolean[] = [
    true, false, true, false
]