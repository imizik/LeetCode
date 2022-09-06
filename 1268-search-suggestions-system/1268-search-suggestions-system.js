/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort((a,b) => a.localeCompare(b))
    
    let result = []
    
    for (let i = 0; i < searchWord.length; i++) {
        if (!result[i]) result[i] = [];
        let prefix = searchWord.slice(0, i + 1)
        for (let j = 0; j < products.length; j++) {
            if (prefix === products[j].slice(0, i+1)) result[i].push(products[j])
            if (result[i].length === 3) break;
        }
    }
    return result
};