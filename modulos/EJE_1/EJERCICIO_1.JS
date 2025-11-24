
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
