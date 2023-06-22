function Carro(marca, cor, modelo, velocidade) {
    ;this.marca = marca;
    this.cor = cor;
    this.modelo = modelo;
    this.velocidade = velocidade
    this.acelerar = () => {
        return `o carro ${this.marca}, com o modelo ${this.modelo}, está acelerando`;

    };
};

const carro1 = new Carro("Fiat", "vermelho", "500", "200km");
const carro2 = new Carro("porsche", "preto", "911", "350km");
const carro3 = new Carro("ferrari", "branco", "f450", "450km");
const carro4 = new Carro("toyota", "prata", "l200", "230km");
const carro5 = new Carro("lamborghine", "amarela", "huracán", "410km");
const carro6 = new Carro("honda", "azul", "civic", "270km");

//console.log(carro1, carro2, carro3); //chama o código todo

//console.log(carro1.cor, carro2.modelo, carro3.velocidade);  //chama um código específico

console.log(carro3.acelerar());  //chama um método