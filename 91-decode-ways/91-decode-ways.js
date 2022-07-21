/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // const hash = makeHash();
    
    let array = Array(s.length + 1).fill(0)

    array[0] = 1
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 && s[0] === '0'){
            array[1]=0
        } else if (s[i] !== '0'){
            array[i + 1] += array[i]
        }
        if (s[i - 1] + s[i] >= 10 && s[i-1] + s[i] <=26) array[i+1] += array[i-1]
        
    }

    return array[s.length]
};

// const makeHash = function() {
//     const charCode = 96;
//     let hash = {};
//     for (let i = 1; i < 27; i++) {
//         hash[i] = String.fromCharCode(charCode + i).toUpperCase()
//     }
//     return hash
// }