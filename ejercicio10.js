console.log("Ejercicio 10");
const regex10 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
console.log(regex10.test("Hola12"));
console.log(regex10.test("hola3456"));
console.log(regex10.test("Hola1234"));
