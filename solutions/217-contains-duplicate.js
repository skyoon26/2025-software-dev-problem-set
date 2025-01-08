let containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

let case1 = [1, 2, 3, 1];
let case2 = [1, 2, 3, 4];
let case3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(case1), containsDuplicate(case2), containsDuplicate(case3));