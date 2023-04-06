function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}

let counter = makeCounter();
console.dir(counter); // [[Scopes]] : Closure
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
