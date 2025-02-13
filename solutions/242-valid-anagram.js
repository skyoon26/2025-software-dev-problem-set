// Solution 1:
// let isAnagram = function(s, t) {
//   let str1 = s.split('').sort().join('');
//   let str2 = t.split('').sort().join('');

//   if (str1 === str2) {
//     return true;
//   }

//   return false;
// }

// Solution 2:
const isAnagram = (s, t) => {

  if (s.length !== t.length) {
    return false;
  } else {
    return s.split('').sort().join('') === t.split('').sort().join('');
  }
  
}

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t));