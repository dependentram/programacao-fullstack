function calcularSeno(angulo) {
    var radianos = angulo * Math.PI / 180;
    var seno = Math.sin(radianos);
    return seno;
};

var angulo = 30;

var seno = calcularSeno(angulo);

console.log(`O seno de ${angulo} graus é ${seno}`);
