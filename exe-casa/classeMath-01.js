class Figura {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    };
};

class Retangulo extends Figura {
    calcularArea() {
        return Math.round(this.altura * this.largura);
    };
};

const retangulo = new Retangulo(5, 10);

console.log(retangulo.calcularArea(0));