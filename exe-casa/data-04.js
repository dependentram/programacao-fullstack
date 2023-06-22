const dataAtual = new Date();

const novaData = new Date(dataAtual.setMonth(dataAtual.getMonth() + 1));

console.log(novaData);