class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    };

    calcularArea() {
        return this.largura * this.altura;
    };

    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    };

    calcularDiagonal() {
        return Math.sqrt(Math.pow(this.largura, 2) + Math.pow(this.altura, 2)).toFixed(2);  // ou return Math.sqrt(this.altura ** 2 + this.largura ** 2);
    };

    toString() {
        return `        Largura: ${this.largura}, Altura: ${this.altura},
        Área: ${this.calcularArea()}, Perímetro: ${this.calcularPerimetro()},
        Diagonal: ${this.calcularDiagonal()}.`;
    };

};
const retangulo1 = new Retangulo(5, 10);
console.log(retangulo1.toString());
