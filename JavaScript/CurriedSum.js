const arrowSum= x => y => (y !== undefined) ? sum(x + y) : x;

function sum(x) {
    return function(y) {
        if(y !== undefined) {
            return(sum(x+y))
        } else {
            return x;
        }
    }
}

console.log(sum(1)(2)(3)(4)(5)())