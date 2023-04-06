//polyfill for map(callback(currVal, index, array));
Array.prototype.customMap = function (callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
};

//polyfill for forEach(callback(currVal, index, array));
Array.prototype.customForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
};

//polyfill for filter(callback(currVal, index, array));
Array.prototype.customFilter = function (callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            newArray.push(this[index]);
        }
    }
    return newArray;
};

//polyfill for find(callback(currVal, index, array));
Array.prototype.customFind = function (callback) {
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            return this[index];
        }
    }
};

//polyfill for reduce(callback(accumulator, currVal, index, array), initialValue);
Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator
            ? callback(accumulator, this[index], index, this)
            : this[index];
    }
    return accumulator;
};
