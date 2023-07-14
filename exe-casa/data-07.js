function calcularDiferencaEmDias(data1, data2) {

    const umDiaEmMillissegundos = 86400000;

    const data1EmMillissegundos = new
        Date(data1).getTime();

    const data2EmMillissegundos = new
        Date(data2).getTime();

    const diferencaEmMillissegundos = Math.abs(data2EmMillissegundos - data1EmMillissegundos);

    const diferencaEmDias = Math.floor(diferencaEmMillissegundos / umDiaEmMillissegundos);

    console.log(`A difereça entre ${data1} e ${data2} é de ${diferencaEmDias} dias`);

};

calcularDiferencaEmDias('2003-12-19', '2005-06-23');



