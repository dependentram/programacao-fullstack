class Carro {
    constructor(marca, cor, modelo, velocidade) {
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
        this.velocidade = velocidade;

    };

    acelerar() {
        return `o carro ${this.marca}, com o modelo ${this.modelo}, está acelerando`;

    };

};
const carro1 = new Carro("Fiat", "vermelho", "500", "200km");
const carro2 = new Carro("porsche", "preto", "911", "350km");

console.log(carro2.acelerar()); 