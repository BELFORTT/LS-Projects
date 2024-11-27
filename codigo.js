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
        if (this.exam.length === 0) return 0; 
        const nota = this.exam.reduce((soma, respostas) => soma + this.corrigir(respostas), 0);
        return nota / this.exam.length;
    }

    min(minima) {
        const notas = this.exam.map(respostas => this.corrigir(respostas));  
        const minimas = notas.filter(nota => nota === minima);  
        return minimas;
    }

    max(maxima) {
        const notas = this.exam.map(respostas => this.corrigir(respostas));  
        const maximas = notas.filter(nota => nota === maxima);  
        return maximas
        

    }

    lt(valor) {
        const notas = this.exam.map(respostas => this.corrigir(respostas));
        const menores = notas.filter(nota => nota < valor);
        return menores;
    }

    gt(valor) {
        const notas = this.exam.map(respostas => this.corrigir(respostas));
        const maiores = notas.filter(nota => nota > valor);
        return maiores;
    }
 }
 
 
 export default Exam;
 
