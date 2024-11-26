class Exam {
    constructor (peso, gabarito){
        this.peso = peso
        this.gabarito = gabarito
        this.exam = []
    }
 
    add(exam) {
        this.exam.push(exam)
        return this.exam
    }
 
 
    corrigir(exam) {
        let total = 0
        for (let questao in this.gabarito){
            if (exam[questao] === this.gabarito[questao]){
                total += this.peso[questao]
            }
        }
        return total 
    }
 
    avg() {
        const nota = this.exam.reduce((soma, respostas) => soma + this.corrigir(respostas), 0)
        return nota
    }

    min(minima) {
        const nota = this.exam.map(respostas => this.corrigir(respostas));
        if (nota.some(nota => nota === minima)){
            return "Atingiu a mota mínima"
        }

        else if (nota.some(nota => nota != minima)){
            return "Nota superior a mínima"
        }
    }

    max(maxima) {
        const nota = this.exam.map(respostas => this.corrigir(respostas));
        if (nota.some(nota => nota === maxima)){
            return `Atingiu a nota máxima ${maxima}`
        }
        else if (nota.some(nota => nota != maxima)){
            return `Não atingiu a nota máxima`
        }

    }

    lt(valor) {
        const nota = this.exam.map(respostas => this.corrigir(respostas));
        if (nota.some(nota => nota > valor)){
            return `Valor ${valor} definido é menor que a nota ${nota}`
        }
    }

    gt(valor) {
        const nota = this.exam.map(respostas => this.corrigir(respostas));
        if (nota.some(nota => nota < valor)){
            return `Valor ${valor} definido é maior que a nota ${nota}`
        }     
    }
 }
 
 
 export default Exam;
 
