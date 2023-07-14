function exibirDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "domingo";
            break;
        case 2:
            return "segunda";
            break;
        case 3:
            return "terça";
            break;
        case 4:
            return "quarta";
            break;
        case 5:
            return "quinta";
            break;
        case 6:
            return "sexta";
            break;
        case 7:
            return "sábado";
            break;
        default:
            return "inválido";
            break;
    };
};

console.log(exibirDiaDaSemana(8));