/*
Design a function computeAmount which take number of lacs and return the amount after using value function along with it.
const computeAmount = () => {
    
};

console.log(computeAmount().value()) //0
console.log(computeAmount().lacs(2).value()) //2,00,000
console.log(computeAmount().lacs(2).lacs(20).value()) //22,00,000
console.log(computeAmount().lacs(15).lacs(20).lacs(7).value()) //42,00,000

*/

const computeAmount = () => {
  let amount = 0;
  const output = {
    value: () => amount,
    lacs: (num) => {
      amount += num * 100000;
      return output;
    },
  };
  return output;
};

/*
Create a toggle function in JavaScript that accepts a list of arguments and toggles each of them when invoked in a cycle.

Example
let hello = toggle("hello");
hello() // "hello";
hello() // "hello";

let onOff = toggle("on", "off");
onOff() // "on"
onOff() // "off"
onOff() // "on"

let onOff = toggle("on", "off", "random");
onOff() // "on"
onOff() // "off"
onOff() // "random"
onOff() // "on"
onOff() // "off"
*/

function toggle(...args) {
  let count = 0;
  return () => {
    const output = args[count];
    count++;
    console.log(output, count, "===> output");
    if (count === args.length) count = 0;
    return output;
  };
}
