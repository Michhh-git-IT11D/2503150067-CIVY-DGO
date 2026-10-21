const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log(nombre + " " + edad + " " + mensaje);

    document.getElementById("resultado").textContent = "Gracias por tu mensaje  " + nombre ;

    formulario.reset();
});

