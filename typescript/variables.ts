//Booleanos
let esNumero: boolean
let esCadena: boolean = true
esNumero = false

//Números
let numeroUno: number
let numeroDos: number = 25
numeroUno = 200

//Cadenas
let nombre: string = 'Juan'
let apellido: string = 'Cadena'
let apodo: string
apodo = 'Flaco'

let nombreCompleto = `El nombre completo de la persona es ${nombre} ${apellido}`
console.log(nombreCompleto)

//Arreglos
let nombres: string[] = ['Carlos', 'Paul', 'Ana']
nombres.push('Fernanda')
console.log(nombres)
let nombresDos: string[]
nombresDos = nombres.slice(2, 3)
console.log(nombresDos)
nombresDos = nombres.splice(2, 1)
console.log(nombresDos)

//Tuplas
let tupla: [string, boolean] = ['Software', true]

//Enumerados
enum perfiles { Admnistrador, Usuario, Digitador }
let tipoUsuario: perfiles = perfiles.Admnistrador
console.log(tipoUsuario)

//void
function imprimir(): void {
    alert('Hola Mundo')
}

//null - undefined
let admin: null = null
let identificacion: undefined = undefined

//Unión de tipos
let tipos: string | number | boolean | null

//Funciones parametrizadas -- ? parámetro opcional
function imprimirPersona(nombre: string, edad?: number) {
    return {
        nombre: nombre,
        edad: edad
    }
}
let persona = imprimirPersona('Keybrish')

//Funciones flecha o Lambda
const sumar = (valorUno: number, valorDos: number): number => {
    return valorUno + valorDos
}
console.log(sumar(4, 6))

function mostrar(a: number, b: number, calcular: (valor: number) => void): void {
    let resultado = a + b
    calcular(resultado)
}
mostrar(5, 10, (x) => {
    console.log(x)
})