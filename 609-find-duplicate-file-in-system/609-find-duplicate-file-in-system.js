/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let output = [];
    let hash = {};
    
    for (let path of paths) {
        const split = path.split(' ')
        for (let i = 1; i < split.length; i++) {
            const index = split[i].indexOf('(')
            const text = split[i].slice(index + 1, split[i].length - 1)
            const combined = split[0] + '/'+split[i].slice(0, index)
            if (hash[text]){
                hash[text].push(combined)
            } else {
                hash[text] = [combined]
            }
        }
    }
    
    for (let key in hash) {
        if (hash[key].length > 1) {
            output.push(hash[key])
        }
    }
    return output
    
};
