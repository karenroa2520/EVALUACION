// Función que recibe un arreglo de notas y calcula el promedio y el rendimiento
function calcularPromedio(notas) {
    let suma = 0;

    // Sumamos todas las notas
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    // Calculamos el promedio
    let promedio = suma / notas.length;

    // Decidimos el rendimiento según el promedio
    let rendimiento;
    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Devolvemos los dos valores en un objeto
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}

// Pedimos cuántas notas va a ingresar el usuario
let cantidad = parseInt(prompt("¿Cuántas notas quieres ingresar?"));

// Creamos una lista vacía para guardar las notas
let notas = [];

// Pedimos cada nota una por una
for (let i = 0; i < cantidad; i++) {
    let nota = parseFloat(prompt("Ingresa la nota " + (i + 1) + ":"));
    notas[i] = nota;  // así guardamos la nota sin usar .push()
}

// Usamos la función para calcular el resultado
let resultado = calcularPromedio(notas);

// Mostramos los resultados
alert("Tu promedio es: " + resultado.promedio);
alert("Tu rendimiento es: " + resultado.rendimiento);