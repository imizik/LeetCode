/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let result = ""
    for (let str of strs) {
        result += str + '$592'
    }
    return result
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let splitted = s.split('$592')
    splitted.pop()
    return splitted
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */