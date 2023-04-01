function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  // i step
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n*n); Quadratic occurs in nested loops
  space: O(n)

*/

/* 
  Add your pseudocode here
  itererate through each number in the array ([3,6,9,20,8,12], 20)
  From the current number array identify a complement that adds up to the target (Comp = target - num)(12=20-8)
  After getting the complement iterate through the rest of the array 
  check if any number is our compliment
  if so returns true or else return false
  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
