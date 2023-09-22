
const p = new Promise((resolverPromessa, rejeitarPromessa) => {
  setTimeout(() => {
    resolverPromessa("Promessa Resolvida");
  }, 2000);
  console.log("TESTE");
});


p.then(console.log);
