/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let l = 0
    let h = letters.length - 1
    
    while (l <= h) {
        let mid = Math.floor((l+h) / 2)
        
        if (letters[mid].charCodeAt(0) > target.charCodeAt(0) && letters[mid-1] && letters[mid -1].charCodeAt(0) <= target.charCodeAt(0)) {
            return letters[mid]
        } else if (letters[mid].charCodeAt(0) > target.charCodeAt(0)) {
            h = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return letters[0]
};