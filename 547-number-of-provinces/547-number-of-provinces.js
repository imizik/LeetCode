/**
 * @param {number[][]} isConnected
 * @return {number}
 */


function findCircleNum(M) {
    let adj = {};
    let set = new Set();
    let count = 0;
    
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1) {
                adj[i] ? adj[i].push(j) : adj[i] = [j]
            }
        }
    }
    
    const dfs = (node) => {
        set.add(node)
        for (let num of adj[node]) {
            if (!set.has(num)) dfs(num)
        }
    }
    
    for (let key in adj) {
        if (!set.has(Number(key))) {
            dfs(Number(key))
            count++
        }
    }
        
    return count
}
