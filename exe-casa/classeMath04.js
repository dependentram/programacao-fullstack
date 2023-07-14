class Forma {
    calcularPerimetro() {
        return 0;
    };
};

class Ciruclo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    };
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    };
};

const circulo = new Ciruclo(5);

console.log(`Perimetro do círculo: ${circulo.calcularPerimetro()}`);

console.log(`Área do círculo: ${circulo.calcularArea()}`);