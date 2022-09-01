const navegar = () => {
    
    window.location.href = "./formulario.html";
    //navegar hacia la pagina formulario.html
    //window.location.assign("formulario.html");
    
    // Execute a function when the user presses a key on the keyboard
    input.addEventListener("keypress", function(event) {
      var input = document.getElementById("input");
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
    // Cancel the default action, if needed
    //event.preventDefault();
    window.location.href = "./formulario.html";

    }
});
}

function alertar() {
  alert("Gracias por registrarte, pronto te contactaremos");
}