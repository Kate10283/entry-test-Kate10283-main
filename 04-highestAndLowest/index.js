/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let num = numbers.split(" ");
    let min = Math.min.apply(null, num);
    let max = Math.max.apply(null, num);
    return "" + min + " " + max;
}
