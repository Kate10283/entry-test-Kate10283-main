/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
        let obj = {};
        let result = "";
        let last = "";
        if(size == 0) {
            return "";
        }
        if(size == undefined) {
            return string;
        }
        string = string.split("");
    
        for (let i = 0; i < string.length; i++) {
          
            if (!obj[string[i]] || last != string[i]) {
                obj[string[i]] = 1;
                result += string[i];
            }
            else {
               
                  obj[string[i]] += 1;
              
                if (obj[string[i]] <= size) {
                    result += string[i];
                }
                
              
            }
           
            last = string[i];
            
        }
        
        return result;
    
}
