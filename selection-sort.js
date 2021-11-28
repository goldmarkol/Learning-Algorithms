// Selection Sort - O(n^2)
// Sort an array in ascending order

// Parameter:
//  1. random array

// 1. Finds the smallest value in an array
function findSmallestIndex(array) {
  let smallestElement = array[0]; // Stores the smallest value
  let smallestIndex = 0; // Stores the index of the smallest value

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

// 2. Sort the array
function selectionSort(array) {
  let sortedArray = [];
  let length = array.length;

  for (let i = 0; i < length; i++) {
    // Finds the smallest element in the array
    let smallestIndex = findSmallestIndex(array);
    // Adds the smallest element to new array
    sortedArray.push(array.splice(smallestIndex, 1)[0]);

    // arr.splice(index[, deleteCount, elem1, ..., elemN])
    // from the position "index" delete "deleteCount" elements and add "elem1..,elemN"
  }

  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
