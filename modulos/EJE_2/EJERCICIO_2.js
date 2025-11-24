//2. Una empresa maneja un sistema básico de autenticación. El aprendiz debe programar un
//validador que permita el ingreso solo si el usuario cumple dos condiciones:
const validarAcceso = function(edad, contraseñaDigitada) {
    const contraseñaValida = "losfrijolesconarroz";
    
    if (edad >= 18 && contraseñaDigitada === contraseñaValida) {
        return "Acceso concedido.";
    } else {
        return "Acceso denegado.";
    }
};

// Entrada de datos
let edad = parseInt(prompt("Ingrese su edad:"));
let contraseña = prompt("Ingrese la contraseña:");

// Mostrar resultado
alert(validarAcceso(edad, contraseña));