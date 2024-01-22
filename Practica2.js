/* Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
*/
Let diaDeLaSemana = prompt ('¿Que día de la semana es?');
if (diaDeLaSemana === 'Sabado' || diaDeLaSemana === 'Domingo') {
    alert ('Buen Fin de semana');
} else {alert ('¡Buena semana!');
}
/*Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
*/
let numero = prompt ('Ingresa un numero positivo o negativo');
if (numero > 0) {
    alert ('Numero positivo');
}else if (numero < 0 ) {
    alert ('Numero negativo');
} else {
    alert ('Numero es cero');
} 
/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar."
*/
let puntuación = 1;
if (puntuación >= 100) {
    console.log ('¡Felicidades, has ganado!')
}else {
    console.log ('Intenta nuevamente para ganar.')
}
/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
*/
let saldoCuenta = 500 //Ejemplo de saldo
alert (`Tu saldo es de $${saldoCuenta}.`);
/*Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/
let nombre = prompt ('Ingresa tu nombre');
alert (`¡Bienvenido, ${nombre}!`);