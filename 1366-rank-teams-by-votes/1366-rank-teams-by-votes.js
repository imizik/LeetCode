/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    let hash = {};
    //{A: [1,0,0], B: [0,0,1], C: [0,1,0]}
    
    for (let vote of votes) {
        for (let i = 0; i < vote.length; i++) {
            const letter = vote[i]
            if (hash[letter]) {
                hash[letter][i]++
            } else {
                hash[letter] = new Array(vote.length).fill(0)
                hash[letter][i] = 1
            }
        }
    }
    // [['A', [1,0,0]], ['B'...]]
    let entries = Object.entries(hash)
    let sorted = entries.sort((a,b) => {
        for (let i = 0; i < a[1].length; i++) {
            if (a[1][i] !== b[1][i]) return b[1][i] - a[1][i]
        }
        return a[0].charCodeAt(0) - b[0].charCodeAt(0)
    })
    return sorted.map(a => a[0]).join('')
};