export const sameParityFilter = (arr = []) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] % 2 == 0 && arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
        else if (arr[0] % 2 !== 0 && arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
