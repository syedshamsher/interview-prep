/*Input:
const nested = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    }
};
Output:
{
    "A": "12"
    "B": 23,
    "C.O.L": 56,
    "C.P": 23,
    "C.Q.0": 1,
    "C.Q.1": 2,
} 
*/

const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const flatten = (obj, prefix) => {
  //store the result
  let output = {};
  //iterate the object
  for (let k in obj) {
    let val = obj[k];
    //new key
    const newKey = prefix ? prefix + "." + k : k;
    //array and object both are object in js
    if (typeof val === "object") {
      // if it is array
      if (Array.isArray(val)) {
        //use rest & spread together to convert
        //array to object
        const { ...arrToObj } = val;
        const newObj = flatten(arrToObj, newKey);
        output = { ...output, ...newObj };
      }
      //if it is object
      else {
        const newObj = flatten(val, newKey);
        output = { ...output, ...newObj };
      }
    }
    // normal value
    else {
      output = { ...output, [newKey]: val };
    }
  }
  return output;
};

console.log(flatten(nested));
