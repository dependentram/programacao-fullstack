function somarArray(array) {
    const soma = array.reduce((acumulador, valorAtual) =>
        acumulador + valorAtual, 0);
    return soma;
};
const array = [1, 2, 3, 4, 5];
const total = somarArray(array);
console.log(total);