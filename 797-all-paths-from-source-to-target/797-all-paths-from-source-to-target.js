/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let result = []

    
    const dfs = (arr, node) => {
        if (node === graph.length - 1) {
            result.push([...arr, node])
        }
        console.log(graph, node)
        for (let num of graph[node]) {
            console.log(num, 'assa', arr, graph[node])
            dfs([...arr, node], num)
        }
    }
    
    for (let node of graph[0]) {
        dfs([0],node)
    }
    return result
};