//Factorial of 5 = 5*4*3*2*1 = 120

function factorial(item) {
    if (item == 0) {
        return 1
    }
    return item * factorial(item - 1)

}

let data = 5

console.warn(factorial(data))