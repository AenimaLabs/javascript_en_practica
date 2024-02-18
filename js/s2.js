const rojo = document.getElementById("btn-1")
const cafe = document.getElementById("btn-2")
const amarillo = document.getElementById("btn-3")
const azurillo = document.getElementById("btn-4")
const cian = document.getElementById("btn-5")
const magenta = document.getElementById("btn-6")
const caja = document.getElementById("caja")

// Agregar eventos de clic a cada botón
rojo.addEventListener('click', function () {
    caja.style.backgroundColor = "#e53e3e"
})

cafe.addEventListener('click', function () {
    caja.style.backgroundColor = "#dd6b20"
})

amarillo.addEventListener('click', function () {
    caja.style.backgroundColor = "#faf089"
})

azurillo.addEventListener('click', function () {
    caja.style.backgroundColor = "#48bb78"
})

cian.addEventListener('click', function () {
    caja.style.backgroundColor = "#81e6d9"
})

magenta.addEventListener('click', function () {
    caja.style.backgroundColor = "#d53f8c"
})

//era mejor con un for, pero necesitaba el this y colocarle a todos los botones la misma clase para seleccionarlos a todos