// const output = twoSum([2,7,11,15], 9);
const output = reverseString(["h","e","l","l","o"]);
console.log(output);

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function reverseString (s) {
    let left = 0;
    let right = s.length - 1;


    while (left < right) {
        // Swap elements using ES6 Destructuring
        [s[left], s[right]] = [s[right], s[left]];
       
        // Move pointers inward
        left++;
        right--;
    }

    return s;
};
