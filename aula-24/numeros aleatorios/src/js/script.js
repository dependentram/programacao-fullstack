let quadrado = document.querySelector(".quadrado");
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

console.log(red);
console.log(green);
console.log(blue);

quadrado.style.width = "300px";
quadrado.style.height = "300px";
quadrado.style.backgroundColor = `rgb(${red},${green},${blue})`;

