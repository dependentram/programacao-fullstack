//const data = new Date();
//console.log(data.getDate());

const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const diasDaSemana = [
    "domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
];

const hoje = new Date();
const diaSemana = diasDaSemana[hoje.getDay()];
const diaMes = hoje.getDate();
const mes = meses [hoje.getMonth()];
const ano = hoje.getFullYear();

console.log(`Hoje é ${diaSemana}, ${diaMes} de ${mes} de ${ano}.`);

