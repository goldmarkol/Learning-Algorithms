function binary_search(list, item) {
  //variables low and high include boundaries of the search-list
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    // --  until that part shrinks to one element
    let mid = Math.floor((low + high) / 2); // check middle element
    let guess = list[mid];

    if (guess === item) {
      // value is defined
      return mid;
    }
    if (guess > item) {
      // too much
      high = mid - 1;
    } else {
      // not enough
      low = mid + 1;
    }
  }

  return null; // if value does not exist
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null
