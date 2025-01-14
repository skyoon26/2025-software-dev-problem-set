let isAnagram = function(s, t) {
  let str1 = s.split('').sort().join('');
  let str2 = t.split('').sort().join('');

  if (str1 === str2) {
    return true;
  }

  return false;
}

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t));