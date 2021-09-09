/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let result = "";
    str = str.toLowerCase().split("");
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i+1; j++) {
            if (j == 0) {
                result += str[i].toUpperCase();
            }
            else {
                result += str[i];
            }
        }
        if (i < str.length - 1) {
            result += "-";
        }
        
    }
    return result;
}
