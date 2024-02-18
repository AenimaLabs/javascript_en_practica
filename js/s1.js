// asigna el id formulario a una variable
let formu = document.getElementById("formulario")

//función limpieza de los mensajes del formulario
let limpieza = () => {
    document.querySelector(".resultado").innerHTML = ""
    document.querySelector(".errorNombre").innerHTML = ""
    document.querySelector(".errorAsunto").innerHTML = ""
    document.querySelector(".errorMensaje").innerHTML = ""
}


///////////////////

//funcion que da mensaje de exito
let exit_music_for_a_film = ()=>{
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito"
    
};

// funcion que valida los datos del formulario
// esta función se podría hacer con un for al cual se le pasan los argumentos pero me terminé perdiendo al intentar escribir en .errorNombre, .errorAsunto, .errorMensaje.. así que lo hice como el ejercicio guiado no más XD

let validar = (nombre,asunto,mensaje) =>{
   

    let pasamosLaValidacion = true; // inicializa el interruptor para validacion true o false

    let validacionUnica= /^[a-zA-Z\s]+$/ // patron para solo aceptar letras y espacios
    
    if (validacionUnica.test(nombre) === false) {
      document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
      pasamosLaValidacion = false; // cambia el interruptor de la validacion
    };

    
    if (validacionUnica.test(asunto) === false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
        pasamosLaValidacion = false; // cambia el interruptor de la validacion
      };

    
    if (!validacionUnica.test(mensaje)) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
        pasamosLaValidacion = false; // cambia el interruptor de la validacion
      };
            
    return pasamosLaValidacion; // retorna este valor por tanto su contenido sale de la funcion
};

formu.addEventListener( "submit", (event) => 
{
    event.preventDefault(); // evitar comportamiento por defecto del formulario
    limpieza();
    
    // tomar los valores ingresados en cada input del formulario
    let textNombre = document.getElementById("nombre").value
    let textAsunto = document.getElementById("asunto").value
    let textMensaje = document.getElementById("mensaje").value
   
    
    // llamar a funcion validar para checar los 3 campos del formulario
    let resultado = validar(textNombre, textAsunto, textMensaje);
    
    // evaluar valor o resultado devuelto por la funcion validar
    if(resultado == true) {
        exit_music_for_a_film(); // solo es llamada si resultado es true
    };
    
});