class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };
};

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    };
    calcularMedia(nota1, nota2) {
        let media = (nota1 + nota2);
        return media;
    };
};

let estudante1 = new Estudante("Igor", 17, "Programação");
console.log(estudante1);

let media = estudante1.calcularMedia(7, 8);
console.log(`Media ${media}`);