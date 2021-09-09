/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let max = Math.max.apply(null, numbers);
    numbers.splice(numbers.indexOf(max), 1);
    max += Math.max.apply(null, numbers);
    return max;
}
