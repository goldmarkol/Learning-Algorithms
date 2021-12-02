/**
 * Summing elements using cycle
 * @param {Array} array Array of numbers
 * @returns {totalSum} Sum of the numbers
 */

function sum(array) {
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum;
}

console.log(sum([1, 2, 3, 4])); // 10

// using reduce

function sumReduce(array) {
  return array.reduce((value, el, index, arr) => {
    return value + el;
  });
}

console.log(sumReduce([1, 2, 3, 4])); // 10

/**
 * Recursive function for summing elements
 * @param {Array} array Array of numbers
 * @returns {number} Sum of the numbers
 */

function sumRecursive(array) {
  if (array.length == 1) return array[0];
  return array[0] + sumRecursive(array.slice(1));
}

console.log(sumRecursive([1, 2, 3, 4])); // 10

/**
 * Calculate the largest number
 * @param {Array} array Array of numbers
 * @param {number} max Maximum value
 * @returns {number} The largest number
 */

function findMax(array, max = 0) {
  return array.length === 0
    ? max
    : findMax(array.slice(1), array[0] > max ? array[0] : max);
}

console.log(findMax([1, 5, 10, 25, 16, 1])); // 25

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
function quicksort(array) {
  // base case, arrays with 0 or 1 element are already "sorted"
  if (array.length < 2) return array;
  // recursive case
  let pivot = array[0];
  // sub-array of all the elements less than the pivot
  let less = array.slice(1).filter(function (el) {
    return el <= pivot;
  });
  // sub-array of all the elements greater than the pivot
  let greater = array.slice(1).filter(function (el) {
    return el > pivot;
  });
  return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]
