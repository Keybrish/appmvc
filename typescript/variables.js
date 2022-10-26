"use strict";
//Booleanos
let esNumero;
let esCadena = true;
esNumero = false;
//Números
let numeroUno;
let numeroDos = 25;
numeroUno = 200;
//Cadenas
let nombre = 'Juan';
let apellido = 'Cadena';
let apodo;
apodo = 'Flaco';
let nombreCompleto = `El nombre completo de la persona es ${nombre} ${apellido}`;
console.log(nombreCompleto);
//Arreglos
let nombres = ['Carlos', 'Paul', 'Ana'];
nombres.push('Fernanda');
console.log(nombres);
let nombresDos;
nombresDos = nombres.slice(2, 3);
console.log(nombresDos);
nombresDos = nombres.splice(2, 1);
console.log(nombresDos);
//Tuplas
let tupla = ['Software', true];
//Enumerados
var perfiles;
(function (perfiles) {
    perfiles[perfiles["Admnistrador"] = 0] = "Admnistrador";
    perfiles[perfiles["Usuario"] = 1] = "Usuario";
    perfiles[perfiles["Digitador"] = 2] = "Digitador";
})(perfiles || (perfiles = {}));
let tipoUsuario = perfiles.Admnistrador;
console.log(tipoUsuario);
//void
function imprimir() {
    alert('Hola Mundo');
}
//null - undefined
let admin = null;
let identificacion = undefined;
//Unión de tipos
let tipos;
//Funciones parametrizadas -- ? parámetro opcional
function imprimirPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}
let persona = imprimirPersona('Keybrish');
//Funciones flecha o Lambda
const sumar = (valorUno, valorDos) => {
    return valorUno + valorDos;
};
console.log(sumar(4, 6));
function mostrar(a, b, calcular) {
    let resultado = a + b;
    calcular(resultado);
}
mostrar(5, 10, (x) => {
    console.log(x);
});
