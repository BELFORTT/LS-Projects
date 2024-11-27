class Exam {
    constructor (peso, gabarito){
        this.peso = peso
        this.gabarito = gabarito
        this.exam = []
    }
 
    add(exame) {
        this.exam.push(exame);
        return this.exam;
    }

    corrigir(exame) {
        let total = 0;
        for (let questao in this.gabarito) {
            if (exame[questao] === this.gabarito[questao]) {
                total += this.peso[questao];
            }
        }
        return total;
    }
 
    avg() {
        const nota = this.exam.reduce((acc, resposta) => acc + this.corrigir(resposta), 0);
        return nota / this.exam.length;
    }

    min() {
        let notas = this.exam.map(respostas => this.corrigir(respostas));
        let menor = notas[0];

        for (let nota of notas) {
            if (nota < menor){
                menor = nota
            };
        }

        return notas.filter(nota => nota === menor);
    }
    

    max() {
        let notas = this.exam.map(respostas => this.corrigir(respostas));
        let maior = notas[0];

        for (let nota of notas) {
            if (nota > maior) {
                maior = nota
            };
        }

        return notas.filter(nota => nota === maior);
    }
        
    lt(valor) {
        const notas = this.exam.map(resposta => this.corrigir(resposta));
        return notas.filter(nota => nota < valor);
    }

    gt(valor) {
        const notas = this.exam.map(resposta => this.corrigir(resposta));
        return notas.filter(nota => nota > valor);
    }
 }
 
 
 export default Exam;
 
