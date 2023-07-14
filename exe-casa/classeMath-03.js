class Veiculo {
    constructor(marca, modelo, ano, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    };
};
class Carro extends Veiculo {
    constructor(marca, modelo, ano, preco, placa) {
        super(marca, modelo, ano, preco);
        this.placa = placa;
    };
    calcularValorParcela(qtdParcelas) {
        const taxaJuros = 0.02;
        const valorFinal = this.preco * Math.pow((1 + taxaJuros), qtdParcelas);
        const valorParcela = valorFinal / qtdParcelas;

        return valorParcela.toFixed(2);
    };
};

const meuCarro = new Carro("Fiat", "uno", 2014, 18000, "ABC-1234");
const valorParcela = meuCarro.calcularValorParcela(12);
console.log(`Valor da parcela: R$ ${valorParcela}`);