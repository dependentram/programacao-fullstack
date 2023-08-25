const botao = document.querySelector(".btn");

function verificarIdade() {

 let anoAtual = new Date().getFullYear();
 let anoNascimento = document.querySelector("#txtano");
 let resultado = document.querySelector("div#resultado");

 if (anoNascimento.value.lenght === 0 || anoNascimento.value > anoAtual) {
    alert("ERRO => Verifique os dados e tente novamente");

 } else {

    let formSexo = document.getElementsByName("radsex");
    let idade = anoAtual - Number(anoNascimento.value);
    let faixaEtaria = "";
    let img = document.createElement("img");
    img.setAttribute("id", "imagem");

    if (formSexo[0].checked) {
        if (idade >= 0 && idade <= 4) {
            faixaEtaria = "uma bebê";
            img.setAttribute("src", "./assets/bebe-f.jpg");

        } else if (idade >= 5 && idade <= 15 ) {
            faixaEtaria = "uma menina";
            img.setAttribute("src", "./assets/crianca-f.jpeg");

        }else if (idade >= 16 && idade <= 20) {
            faixaEtaria = "uma adolescente";
            img.setAttribute("src", "./assets/adolescente-f.jpeg");

        } else if (idade >= 21 && idade <= 60) {
            faixaEtaria = "uma adulta";
            img.setAttribute("src", "./assets/adulto-f.jpeg");

        } else {
            faixaEtaria = "uma idosa";
            img.setAttribute("src", "./assets/idoso-f.jpeg");
        };

    } else {

        if (idade >= 0 && idade <= 4) {
            faixaEtaria = "um bebê";
            img.setAttribute("src", "./assets/bebe-m.jpeg");

        } else if (idade >= 5 && idade <= 15 ) {
            faixaEtaria = "um menino";
            img.setAttribute("src", "./assets/crianca-m.jpeg");

        }else if (idade >= 16 && idade <= 20) {
            faixaEtaria = "um adolescente";
            img.setAttribute("src", "./assets/adolescente-m.jpeg");

        } else if (idade >= 21 && idade <= 60) {
            faixaEtaria = "um adulto";
            img.setAttribute("src", "./assets/adulto-m.jpeg");

        } else {
            faixaEtaria = "um idoso";
            img.setAttribute("src", "./assets/idoso-m.jpeg");
        };
    };

    resultado.innerHTML = `Detectamos ${faixaEtaria} com ${idade} anos.` 
    resultado.appendChild(img);

 };

};

botao.addEventListener("click", verificarIdade);

