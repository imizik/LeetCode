var mostVisitedPattern = function(username, timestamp, website) {
    let patterns = {};
    let tuples = [];
    for (let i = 0; i < username.length; i++) {
        tuples.push([username[i], timestamp[i], website[i]]);
    }
    tuples.sort((a,b) => a[1] - b[1]);
    
    let map = {};
    for (let [username, timestamp, website] of tuples) {
        if (!map[username]) map[username] = [];
        map[username].push(website);
    }
    
    let most = 0;
    for (let key in map) {
        let sequences = {};
        let user = map[key];
        for (let i = 0; i < user.length - 2; i++) {
            for (let j = i + 1; j < user.length - 1; j++) {
                for (let k = j + 1; k < user.length; k++) {
                    let str = user[i] + ',' + user[j] + ',' + user[k];
                    sequences[str] = 1;
                }
            }
        }
        Object.keys(sequences).forEach((sequence) => {
            if (!patterns[sequence]) patterns[sequence] = 0;
            patterns[sequence] += 1;
            most = Math.max(most, patterns[sequence]);
        })
    }

    let arr = [];
    for (let key in patterns) {
        if (patterns[key] === most) arr.push(key); 
    }
    arr.sort();
    return arr[0].split(',');
};