// const output = twoSum([2,7,11,15], 9);
const output = twoSum([2, 5, 5, 11], 10);
console.log(output);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const result = [];

    for (let i = 0; i < nums.length - 1; i++) {
        // console.log('i: ', i);
        for (let j = i + 1; j < nums.length; j++) {
            // console.log('j: ', j);
            if (nums[i] + nums[j] === target) {
                // console.log('found: ', nums[i], nums[j]);
                result.push(i, j);
                // console.log(result);
                return result;
            }
        }
    };

    return result;

};


