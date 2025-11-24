// Función declarada que recibe un arreglo de notas
function calcularPromedio(notas) {
    let suma = 0;

    // Usamos un ciclo para recorrer el arreglo y sumar las notas
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calculamos el promedio
    let promedio = suma / notas.length;

    // Evaluamos el rendimiento con condicionales
    let rendimiento;
    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Retornamos un objeto con el promedio y el nivel de rendimiento
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}

// --- Código para interactuar con el usuario (en consola o navegador) ---

// Pedimos la cantidad de notas
let cantidad = parseInt(prompt("¿Cuántas notas quieres ingresar?"));

// Creamos un arreglo vacío para guardar las notas
let notas = [];

// Pedimos cada nota usando un ciclo
for (let i = 0; i < cantidad; i++) {
    let nota = parseFloat(prompt(`Ingresa la nota ${i + 1}:`));
    notas.push(nota);
}

// Llamamos a la función
let resultado = calcularPromedio(notas);

// Mostramos el resultado
alert("Promedio final:", resultado.promedio.toFixed(2));
alert("Categoría de rendimiento:", resultado.rendimiento);

// Si estás en navegador, también puedes usar alert():
// alert(`Promedio: ${resultado.promedio.toFixed(2)}\nRendimiento: ${resultado.rendimiento}`);