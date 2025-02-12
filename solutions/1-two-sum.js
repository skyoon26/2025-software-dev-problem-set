// Solution 1: Passes but is not optimal
const twoSum = (nums, target) => {
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        array.push(i, j);
      }
    }
  }

  return array;
}

let nums = [3, 3];
let target = 6;

console.log(twoSum(nums, target));

// Solution 2: 
