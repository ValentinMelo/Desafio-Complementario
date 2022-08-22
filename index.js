let capital = parseInt(prompt('Ingresa el capital a pedir (máximo 5.000 USD)'))
let numeroCuotas = parseInt(prompt('Ingresa la cantidad de cuotas a pagar (entre 1 a 12 cuotas)'))

let maximoCapital = 5000
let maximoCuotas = 12

//tasa de interes para prestamos menores o iguales a 6 cuotas
let interes1 = 2
//tasa de interes para prestamos mayores a 6 cuotas
let interes2 = 5

let montoCuota1 = (capital/numeroCuotas)*(1+(interes1/100))
let montoCuota2 = (capital/numeroCuotas)*(1+(interes2/100))

if (capital<=maximoCapital && numeroCuotas<=6){
    for(let i=1;i<=numeroCuotas;i++){
            console.log('Cuota ',i,': ',montoCuota1)
    }
} else if(capital<=maximoCapital && numeroCuotas>6 && numeroCuotas<=maximoCuotas) {
    for(let i=1;i<=numeroCuotas;i++){
        console.log('Cuota ',i,': ',montoCuota2)
}
} else alert ('Requisitos: máximo de capital 5.000 USD y máximo de cuotas 12')