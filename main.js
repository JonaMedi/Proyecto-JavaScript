let nombre = prompt("¿Cual es tu nombre?");

if (nombre == "") {
    alert(`Bienvenido, ${nombre}`);
}

let pass = 0810;
let dato = parseInt(prompt("¿Cual es la clave?"));
let intentos = 3;

while (dato != pass && intentos > 0){
    intentos--;
    alert(`Clave incorrecta ${nombre}, Te quedan ${intentos} intentos`);
    dato = parseInt(prompt("¿Cual es la clave?"));
}

let edad = prompt("¿Que edad tenes?");

if (edad <= 17) {
    alert("No podes comprar en esta pagina!");
} else if (edad >= 18) {
    alert(`Podes comprar, Gracias Por elegirnos! ${nombre}`);
}

let producto1, producto2, suma, resultado;
producto1 = parseInt(prompt("Introduce el primer precio"));
producto2 = parseInt(prompt("Introduce el segundo precio"));
suma = "+";

switch(suma){
    case "+":
        if(producto1 + producto2){
            resultado = producto1 + producto2;
        }
}

alert(`${resultado}`)