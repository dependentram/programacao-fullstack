// Obtendo dados de um servidor fictício

async function obterDadosDoServidor(id) {
    const resposta = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
    const dados = await resposta.json();
    console.log('Dados do servidor:', dados.name);
}

obterDadosDoServidor(55);