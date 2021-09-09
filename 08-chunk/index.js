// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let results = [];
    while (arr.length) {
        results.push(arr.splice(0, size));
    }
    return results;
};
