console.log("Ejercicio 11");

const regex11 = /https:\/\/[^\s]+/g;
const url = "Visita https://google.com y la web https://github.com ahora.";

console.log(url.match(regex11));
