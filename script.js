
// Enter numbers
const lowerNumber = parseInt(prompt('Ingrese el menor número de la serie: '));
const higherNumber = parseInt(prompt('Ingrese el mayor número de la serie: '));

var result = [];

// lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // greater than 1 and not divisible by other numbers
    
    if (i > 1 && flag == 0) {
        result.push(i)
    }
}
1
alert(`Los numeros primos entre ${lowerNumber} y ${higherNumber} son: ${result.join(',')}` );