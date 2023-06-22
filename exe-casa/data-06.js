const diasSemanas = [
      "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
];

function exibirDiaSemana(data) {

      const date = new Date(data);
      const diaSemana = diasSemanas[date.getDay()];

      console.log(diaSemana);
};

exibirDiaSemana(new Date());