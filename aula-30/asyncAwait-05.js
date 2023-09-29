const fs = require('fs').promises;

async function lerArquivo () {
    const conteudo = await fs.readFile('./aula-30/arquivo.txt', 'utf-8');
    console.log('conteudo do arquivo:', conteudo);
};

lerArquivo();