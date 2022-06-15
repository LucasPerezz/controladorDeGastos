//ACUMULADORES
let totalDinero = Number(localStorage.getItem("Dinero"));
let gastosTot = Number(localStorage.getItem("Gastos"));
let gastosFacturas = Number(localStorage.getItem("Facturas"));
let gastosComida = Number(localStorage.getItem("Comida"));
let gastosRopa = Number(localStorage.getItem("Ropa"));
let gastosEntretenimiento = Number(localStorage.getItem("Entretenimiento"));
let gastosShopping = Number(localStorage.getItem("Shopping"));
let gastosDeportes = Number(localStorage.getItem("Deportes"));
let gastosOtros = Number(localStorage.getItem("Otros"));


// DATOS PRINCIPALES
let dineroActual = document.getElementById('money').textContent = localStorage.getItem("Dinero") === null ? "$" + 0 : "$" + localStorage.getItem("Dinero");
let totalGastos = document.getElementById('gastos').textContent = localStorage.getItem("Gastos") === null ? "$" + 0 : "$" + localStorage.getItem("Gastos");


//DATOS POR CATEGORIA
let facturas = document.getElementById('facturas').textContent = localStorage.getItem("Facturas") === null ? "$" + 0 : "$" + localStorage.getItem("Facturas");
let comida = document.getElementById('comida').textContent = localStorage.getItem("Comida") === null ? "$" + 0 : "$" + localStorage.getItem("Comida");
let ropa = document.getElementById('ropa').textContent = localStorage.getItem("Ropa") === null ? "$" + 0 : "$" + localStorage.getItem("Ropa");
let entretenimiento = document.getElementById('entretenimiento').textContent = localStorage.getItem("Entretenimiento") === null ? "$" + 0 : "$" + localStorage.getItem("Entretenimiento");
let shopping = document.getElementById('shopping').textContent = localStorage.getItem("Shopping") === null ? "$" + 0 : "$" + localStorage.getItem("Shopping");
let deportes = document.getElementById('deportes').textContent = localStorage.getItem("Deportes") === null ? "$" + 0 : "$" + localStorage.getItem("Deportes");
let otros = document.getElementById('otros').textContent = localStorage.getItem("Otros") === null ? "$" + 0 : "$" + localStorage.getItem("Otros");


let categoriaSeleccionada = document.getElementById('categoriaSeleccionada');


const anadirGastos = () => {
    const ingresoGasto = Number(document.getElementById('ingresoGasto').value);
    if(categoriaSeleccionada.value === "Facturas") {
        gastosTot += ingresoGasto;
        totalDinero -= ingresoGasto;
        dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
        totalGastos = document.getElementById('gastos').textContent = "$" + gastosTot;
        gastosFacturas += ingresoGasto;
        localStorage.setItem("Facturas", gastosFacturas);
        localStorage.setItem("Gastos", gastosTot);
        localStorage.setItem("Dinero", totalDinero);
        facturas = document.getElementById('facturas').textContent = "$" + gastosFacturas;
    } else if (categoriaSeleccionada.value === "Comida") {
        gastosTot += ingresoGasto;
        totalDinero -= ingresoGasto;
        dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
        totalGastos = document.getElementById('gastos').textContent = "$" + gastosTot;
        gastosComida += ingresoGasto;
        localStorage.setItem("Comida", gastosComida);
        localStorage.setItem("Gastos", gastosTot);
        localStorage.setItem("Dinero", totalDinero);
        comida = document.getElementById('comida').textContent = "$" + gastosComida;
    } else if (categoriaSeleccionada.value === 'Ropa') {
        gastosTot += ingresoGasto;
        totalDinero -= ingresoGasto;
        dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
        totalGastos = document.getElementById('gastos').textContent = "$" + gastosTot;
        gastosRopa += ingresoGasto;
        localStorage.setItem("Ropa", gastosRopa);
        localStorage.setItem("Gastos", gastosTot);
        localStorage.setItem("Dinero", totalDinero);
        document.getElementById('ropa').textContent = "$" + gastosRopa;
    } else if (categoriaSeleccionada.value === 'Entretenimiento') {
        gastosTot += ingresoGasto;
        totalDinero -= ingresoGasto;
        dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
        totalGastos = document.getElementById('gastos').textContent = "$" + gastosTot;
        gastosEntretenimiento += ingresoGasto;
        localStorage.setItem("Entretenimiento", gastosEntretenimiento);
        localStorage.setItem("Gastos", gastosTot);
        localStorage.setItem("Dinero", totalDinero);
        entretenimiento = document.getElementById('entretenimiento').textContent  = "$" + gastosEntretenimiento;
    } else if (categoriaSeleccionada.value === 'Shopping') {
        gastosTot += ingresoGasto;
        totalDinero -= ingresoGasto;
        dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
        totalGastos = document.getElementById('gastos').textContent = "$" + gastosTot;
        gastosShopping += ingresoGasto;
        localStorage.setItem("Shopping", gastosShopping);
        localStorage.setItem("Gastos", gastosTot);
        localStorage.setItem("Dinero", totalDinero);
        shopping = document.getElementById('shopping').textContent = "$" + gastosShopping;
    } else if (categoriaSeleccionada.value === 'Deportes') {
        gastosTot += ingresoGasto;
        totalDinero -= ingresoGasto;
        dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
        totalGastos = document.getElementById('gastos').textContent = "$" + gastosTot;
        gastosDeportes += ingresoGasto;
        localStorage.setItem("Deportes", gastosDeportes);
        localStorage.setItem("Gastos", gastosTot);
        localStorage.setItem("Dinero", totalDinero);
        deportes = document.getElementById('deportes').textContent = "$" + gastosDeportes;
    } else {
        gastosTot += ingresoGasto;
        totalDinero -= ingresoGasto;
        dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
        totalGastos = document.getElementById('gastos').textContent = "$" + gastosTot;
        gastosOtros += ingresoGasto;
        localStorage.setItem("Otros", gastosOtros);
        localStorage.setItem("Gastos", gastosTot);
        localStorage.setItem("Dinero", totalDinero);
        otros = document.getElementById('otros').textContent = "$" + gastosOtros;
    }
}


const agregarDinero = () => {
    const ingresoDinero = Number(document.getElementById('ingresoDinero').value);
    let informacionDinero = localStorage.getItem("Dinero");
    totalDinero += Number(informacionDinero);
    totalDinero += ingresoDinero;
    localStorage.setItem("Dinero", totalDinero);
    dineroActual = document.getElementById('money').textContent = "$" + totalDinero;
}



//Acciones por usuario
const botonIngreso = document.getElementById('buttonIngreso').addEventListener("click", agregarDinero);



const botonAnadir = document.getElementById('buttonAnadir').addEventListener('click', anadirGastos);


