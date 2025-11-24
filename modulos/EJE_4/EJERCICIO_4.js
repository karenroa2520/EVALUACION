// Función declarada para calcular el impuesto de un solo producto
function calcularImpuestoUnitario(valor, porcentaje) {
    return valor * (porcentaje / 100);
}

// Función expresada que procesa todos los productos
const procesarImpuestos = function() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
    let totalImpuesto = 0;
    let contador = 1;

    // Usamos un ciclo while para repetir según la cantidad de productos
    while (contador <= cantidad) {
        let valor = parseFloat(prompt("Ingrese el valor del producto " + contador + ":"));
        let porcentaje = parseFloat(prompt("Ingrese el porcentaje de impuesto del producto " + contador + ":"));

        let impuestoProducto = calcularImpuestoUnitario(valor, porcentaje);
        totalImpuesto = totalImpuesto + impuestoProducto;

        contador = contador + 1;
    }

    return totalImpuesto;
};

alert("El impuesto total acumulado es: " + procesarImpuestos());