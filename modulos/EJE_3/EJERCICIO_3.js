//3. Enunciado analítico:
//Se necesita generar la tabla de multiplicar de un número ingresado por el usuario. El
//programa debe mostrar resultados del 1 al 10. Este ejercicio permite evaluar el manejo de
//ciclos y operaciones matemáticas.


const generarTabla = (numero) => {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(numero * i);
    }
    return resultados;
};

const num = parseInt(prompt("Ingrese un número:"));
alert(`Tabla del ${num}: ${generarTabla(num).join(", ")}`);