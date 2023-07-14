// caixa do banco: << 1,2,3,4,5

// FIFO -> First in - First out

//const fila = [];

//fila.unshift(1);
//fila.unshift(2);
//fila.unshift(3);
//fila.unshift(4);
//fila.unshift(5);

//console.log(fila.pop());
//console.log(fila.pop());
//console.log(fila);

const construirFila = () => {
    const dados = [];

    const adicionarDado = valor => {
        dados.unshift(valor);
    };

    const removerDado = () => {
        if (dados.length === 0) {
            return -1
        };

        const valor = dados[dados.length - 1];
        dados.splice(dados.length - 1, 1);

        return valor;

    };

    const imprimirDado = () => console.log(dados);

    return {
        adicionarDado,
        removerDado,
        imprimirDado,
    };

};

const fila = construirFila();
fila.adicionarDado(1);
fila.adicionarDado(2);
fila.adicionarDado(3);
fila.adicionarDado(4);

fila.imprimirDado();
console.log(fila.removerDado());
fila.imprimirDado();
console.log(fila.removerDado());
fila.imprimirDado();
console.log(fila.removerDado());
fila.imprimirDado();
console.log(fila.removerDado());
fila.imprimirDado();
console.log(fila.removerDado());
fila.imprimirDado();
console.log(fila.removerDado());
