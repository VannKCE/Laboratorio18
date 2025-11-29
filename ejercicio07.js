console.log("Ejercicio 07");
document.getElementById("btnUsuario").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(usuario => {
            document.getElementById("nombre").textContent = "Nombre: " + usuario.name;
            document.getElementById("email").textContent = "Email: " + usuario.email;
            document.getElementById("ciudad").textContent = "Ciudad: " + usuario.address.city;
        })
        .catch(error => console.error("Error:", error));
});

