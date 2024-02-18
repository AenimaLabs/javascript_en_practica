let num1 = document.getElementById("valor1")
let num2 = document.getElementById("valor2")
let resultado = document.querySelector(".resultado")
let sumar = document.getElementById("btn-sumar")
let restar = document.getElementById("btn-restar")

let regexNum = /^-?\d*\.?\d+$/

// función que verifica si el valor entregado cumple con el patrón, test devuelve true o false
let validarNum = (valor) => {
    return regexNum.test(valor)
}

sumar.addEventListener('click', () =>{
    let valor1 = num1.value 
    let valor2 = num2.value

    if (validarNum(valor1) && validarNum(valor2)){
        let suma = parseFloat(valor1)+parseFloat(valor2)
        resultado.textContent = suma
    }
    else{
        alert("ingrese números... por qué es tan porfiado...")
    }
})

restar.addEventListener('click', () => {
    let valor1 = num1.value 
    let valor2 = num2.value

    if (validarNum(valor1) && validarNum(valor2)){
        let resta = parseFloat(valor1)-parseFloat(valor2)
        if (resta<0){
            resultado.textContent = 0
        }
        else{
            resultado.textContent = resta
        }
        
    }
    else{
        alert("ingrese números... por qué es tan porfiado...")
    }

})