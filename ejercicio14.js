console.log("Ejercicio 14");

const regex14 = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;

console.log(regex14.test("12/05/2024")); 
console.log(regex14.test("32/12/2024"));
