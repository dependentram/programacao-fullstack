function esperar(segundos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Esperei ${segundos} segundos`);
        }, segundos * 1000);
    });
}

esperar(2)
    .then( console.log)
//    .then(resultado => console.log(resultado))
