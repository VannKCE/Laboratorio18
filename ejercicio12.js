console.log("Ejercicio 12");
const regex12 = /<\/?[^>]+>/g;

const etiqueta = "<h1>Hola</h1>";
console.log(etiqueta.replace(regex12, ""));
