const arrowSum = x => y => (y !== undefined) ? sum(x + y) : x;

function sum(x) {
    return function (y) {
        if (y !== undefined) {
            return (sum(x + y))
        } else {
            return x;
        }
    }
}

function currySum(num) {
    let sum = num;
    return function nextSum(nextNum) {
        if (nextNum) {
            sum += nextNum;
            return nextSum;
        } else {
            return sum;
        }
    };
}

console.log(currySum(1)(2)(3)()); // 6
console.log(currySum(1)(2)(3)(4)()); // 10
console.log(currySum(1)()); // 1


console.log(sum(1)(2)(3)(4)(5)())