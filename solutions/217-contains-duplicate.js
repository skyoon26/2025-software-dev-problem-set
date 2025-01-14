// Solution 1:
// let containsDuplicate = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// Solution 2:
const containsDuplicate = (nums) => {
  let uniqueNums = new Set(); // Create an empty Hash Set

  for (let num of nums) { // Use a for...of loop to iterate over the nums array
    if (uniqueNums.has(num)) { // Check if the current number already exists in the Hash Set
      return true; // If the number exists, return true (nums contains duplicates)
    }
    uniqueNums.add(num); // Otherwise, add the current number to the Hash Set
  }

  return false; // If the loop finishes, return false (nums doesn't contain duplicates)
}

let case1 = [1, 2, 3, 1];
let case2 = [1, 2, 3, 4];
let case3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(case1), containsDuplicate(case2), containsDuplicate(case3));