let obj = { a: 1, b: { c: 2 }, d: [3, 4, 5] };

//Shallow Copy
let shallowCopy = Object.assign({}, obj);

// DeepCopy with JSON.parse & JSON.stringify method
let deepCopyWithJSON = JSON.parse(JSON.stringify(obj));

//DeepCopy with the recursive approach
function deepCopy(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = deepCopy(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

let deepCopy = deepCopy(obj);
