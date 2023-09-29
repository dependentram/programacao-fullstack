function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui');
            resolve();
        }, 2000);
    });
};

function primeiraFuncao02() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui também');
            resolve()
        }, 4000);
    });
};

async function segundaFuncao() {
    console.log("Iniciou");
    await primeiraFuncao();
    await primeiraFuncao02();
    console.log('terminou');
};

segundaFuncao();