let nombre = prompt("¿Cual es tu nombre?");
alert(`Bienvenido/a, ${nombre}`);

let edad = prompt("¿Que edad tenes?");

if (edad <= 17) {
    alert("No podes comprar en esta pagina!");
} else if (edad >= 18) {
    alert(`Podes comprar, Gracias Por elegirnos ${nombre}`);
}

// function sumaDeProductos() {
//     let producto1, producto2, suma, resultado;
//     producto1 = parseInt(prompt("Introduce el primer precio"));
//     producto2 = parseInt(prompt("Introduce el segundo precio"));
//     suma = "+";

//     switch (suma) {
//         case "+":
//             if (producto1 + producto2) {
//                 resultado = producto1 + producto2;
//             }
//     }

//     alert(`${resultado}`);
// }

function valorProducto(precio, descuento) {
    let valorDescuento = precio * descuento / 100;
    let precioFinal = precio - valorDescuento;
    return precioFinal;

}

function productoNuevo() {
    let producto1 = parseFloat(prompt("¿Cual es el precio del producto?"));
    let producto2 = parseFloat(prompt("¿Cual es el precio del proximo producto?"));
    let descuento;
    if (producto1 + producto2 > 10000) {
        descuento = 20;
    } else {
        descuento = 10;
    }
    let precioFinal = valorProducto(producto1 + producto2, descuento);
    alert(`Tu precio final con descuento es ${precioFinal}`)
    return precioFinal;
}

productoNuevo();

class Productos {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}
const productosAgregados = [
    { id: 1, nombre: "Monitores", categoria: "electro", precio: 70000, stock: 10 },
    { id: 2, nombre: "Placas de video", categoria: "electro", precio: 300000, stock: 0 },
    { id: 3, nombre: "Sillas", categoria: "sillas gamer", precio: 80000, stock: 5 },
    { id: 4, nombre: "mother", categoria: "electro", precio: 55000, stock: 3 },
];

const crearProducto = () => {
    let nombre = document.querySelector("#nombre").value;
    let categoria = document.querySelector("#categoria").value;
    let precio = parseInt(document.querySelector("#precio").value);

    let prodNuevo = new Productos(nombre, categoria, precio);
    productosAgregados.push(prodNuevo);
    return productosAgregados
}

const pintarHTML = () => {
    productosAgregados.forEach(producto => {

        if (producto.stock > 0) {
            let nodo = document.createElement("div");
            nodo.setAttribute("id", producto.id);
            nodo.innerHTML = `<h3>${producto.nombre}</h3>
                                <p>${producto.categoria}</p>
                                <small>$${producto.precio}</small>
                            `
            document.getElementById("divPadre").appendChild(nodo);
        } else {
            document.getElementById("divPadre").innerHTML += `<p>No hay stock para el producto ${producto.nombre}</p>`
        }


    })
}

pintarHTML();