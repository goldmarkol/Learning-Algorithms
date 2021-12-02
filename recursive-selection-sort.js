/**
 * Countdown
 * @param {number} i Number
 */

 function countdown(i) {
    console.log(i);
    // base case
    if (i <= 0) return;
    countdown(i - 1);
  }
  
  countdown(6); 
  // 6 5 4 3 2 1 0



  