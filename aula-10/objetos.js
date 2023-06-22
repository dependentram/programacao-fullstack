const pessoa = {
  nome: "Raphael",
  sobrenome: "Rodrigues",
  idade: 31,
  escolaridade: "Graduado",
  sexo: "Masculino",
  skils: ["Javascript", "Java", "PHP", "C#", "Wordpress"],
  andar: () => {
    return "Estou andando ...";
  },
};

// console.log(pessoa["nome"]);
// console.log(pessoa.skils[0]);

for (const item in pessoa) {
  console.log(item + ": " + pessoa[item]);
}


