class Veiculo {
    constructor(nome) {
        this.nome = nome;
    };

    locomover() {
        return console.log(`O carro da marca ${this.nome} com o modelo ${
            this.modelo} da cor ${this.cor} está a ${this.velocidade} kilometros por hora.`);
    };
};

class Carro extends Veiculo {

    constructor(nome, modelo, velocidade, cor) {
        super(nome);
        this.modelo = modelo;
        this.velocidade = velocidade;
        this.cor = cor;
    };

};
const veiculo = new Carro("fiat", "uno", "160", "preta");

veiculo.locomover();


