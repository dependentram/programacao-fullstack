function imprimirPropriedade(objeto) {
    for (propriedade in objeto) {
        console.log(propriedade + ":" + objeto[propriedade]);
    };
};

const pessoa = {
    nome: "igor",
    idade: "17",
    ocupação: "estudante",

};

imprimirPropriedade(pessoa);