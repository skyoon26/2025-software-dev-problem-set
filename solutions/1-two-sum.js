// Solution 1: Passes but is not optimal
// const twoSum = (nums, target) => {
//   let array = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         array.push(i, j);
//       }
//     }
//   }

//   return array;
// }

// Solution 2: Improved solution using a HashMap to track "seen" numbers, loops through the nums array only once by checking for the difference from the target
const twoSum = (nums, target) => {
  let map = new Map(); // Create a HashMap object to store the numbers (key) and their indices (value)

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]; // Calculate the difference to reach target

    if (map.has(difference)) { // Check to see if difference exists in map
      return [map.get(difference), i]; // If so, return the indices
    }

    map.set(nums[i], i); // Store the current number with its index
  }

  return [];
}

let nums = [3, 3];
let target = 6;

console.log(twoSum(nums, target));