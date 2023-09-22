// const p = new Promise(resolverPromessa => {
//     resolverPromessa(3);
// });

// p.then((valor) => console.log(valor));

const p = new Promise (resolverPromessa => {
    resolverPromessa([
        {
            id:1,
            nome:"pedro",
            idade: 34
        },
        {
            id:2,
            nome:"joão",
            idade: 56
        },
        {
            id:3,
            nome:"igor",
            idade: 13
        }
])
})

p.then(valor => JSON.stringify(valor))
 .then(valor => JSON.parse(valor))
 .then(valor => valor.forEach(el => {
    console.log(el.nome);
 }));
