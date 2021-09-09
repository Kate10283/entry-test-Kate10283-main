export const getLastWordLength = str => {
    let result;
     str = str.split(" ").reverse();
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "") {
            return str[i].length;
        }
    }
    return 0;
};
