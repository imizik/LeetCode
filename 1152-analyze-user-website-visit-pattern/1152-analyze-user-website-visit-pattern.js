/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    const entriesMap = timestamp.map((item, i) => [username[i], timestamp[i], website[i]])
        .sort((a, b) => a[1] - b[1]);
    let users = {}
    for (let [user, time, site] of entriesMap) {
        users[user] ? users[user].push(site) : users[user] = [site]
    }
    let max = {}
    let tracker = 0;
    let patterns = {}
    for (let key in users) {
        let seqns = {};
        let user = users[key];
        for (let i = 0; i < user.length - 2; i++) {
            for (let j = i + 1; j < user.length - 1; j++) {
                for (let k = j + 1; k < user.length; k++) {
                    let str = user[i] + ',' + user[j] + ',' + user[k];
                    seqns[str] = 1;
                }
            }
        }
        for (let seq of Object.keys(seqns)) {
            patterns[seq] ? patterns[seq]++ : patterns[seq] = 1
            if (patterns[seq] > tracker) {
                tracker = patterns[seq]
                max[tracker] = seq
            } else if (patterns[seq] === tracker && max[tracker].localeCompare(seq) > 0) {
                max[tracker] = seq
            }
        }
    }
    return max[tracker].split(',')
};