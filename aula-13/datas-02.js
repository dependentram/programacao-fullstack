const hoje = new Date();


const opcoes = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

const dataExtenso = hoje.toLocaleDateString("pt-BR",opcoes);

console.log("hoje é " + dataExtenso);



