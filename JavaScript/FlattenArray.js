//Flatten an Array:
function flattenArray(arr) {
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}

//Flatten a N-dimensional array in JavaScript to a specified depth:

function flattenArrayToDepth(arr, depth) {
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (depth > 0 && Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenArrayToDepth(arr[i], depth - 1));
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}
