import Exam from './codigo.js'


const peso = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2}


const gabarito = {
   q1: "a", q2: "b", q3: "a", q4: "c", q5: "d"
};


const teste = new Exam(peso, gabarito)


const e1 = {
   q1: "a", q2: "b", q3: "a", q4: "a", q5: "b"
}

console.log(teste.add(e1))

console.log(teste.corrigir(e1))

console.log(teste.avg())

console.log(teste.min(0))

console.log(teste.max(10))

console.log(teste.lt(4))

console.log(teste.gt(9))
