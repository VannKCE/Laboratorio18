console.log("Ejercicio 08");
document.getElementById("btnUsuario2").addEventListener("click", cargarUsuario2);

async function cargarUsuario2() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const usuario = await response.json();
        document.getElementById("nombre2").textContent = "Nombre: " + usuario.name;
        document.getElementById("email2").textContent = "E-mail: " + usuario.email;
        document.getElementById("ciudad2").textContent = "Ciudad: " + usuario.address.city;
    } catch (error) {
        console.error("Error al cargar usuario:", error);
    }
    
}