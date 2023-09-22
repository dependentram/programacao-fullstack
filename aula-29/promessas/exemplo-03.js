//const p = new Promise((resolverPromessa, rejeitarPromessa) => {
//    setTimeout(() => {
//        resolverPromessa("Promessa resolvida");
//    }, 2000);
//});

//p.then(resultado => console.log(resultado))

const p = new Promise((resolverPromessa, rejeitarPromessa) => {
    setTimeout(() => {
        resolverPromessa("Promessa resolvida");
        rejeitarPromessa("Promessa rejeitada");
    }, 2000);
});

p.then(resultado => console.log(resultado))