/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ').reverse()
    let str = ''
    console.log(arr)
    for (let word of arr) {
        if (word !== '' ) {
            str += word + ' '
        }
    }
    return str.slice(0, str.length - 1)
};