// Introducimos un 1
input.onButtonPressed(Button.A, function () {
    bits = bits - 1
    Numero = Numero + 2 ** bits
    if (bits == 0) {
        basic.showString(convertToText(Numero))
        bits = NumeroBits
        Numero = 0
    }
})
// Introducimos un 0
input.onButtonPressed(Button.B, function () {
    bits = bits - 1
    if (bits == 0) {
        basic.showNumber(Numero)
        bits = NumeroBits
        Numero = 0
    }
})
let Numero = 0
let bits = 0
let NumeroBits = 0
NumeroBits = 7
bits = NumeroBits
// Número decimal a calcular
Numero = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
