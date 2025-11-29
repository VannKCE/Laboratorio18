console.log("Ejercicio 09");
import multiplicar from "./multiplicacionDivision.js";
import { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(5, 3));
console.log("Multiplicación:", multiplicar(5, 3));

try {
    console.log("División:", dividir(10, 0));
} catch (error) {
    console.log(`Error en división: "${error.message}"`);
}
