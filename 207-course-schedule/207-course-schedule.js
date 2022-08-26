/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let hash = {}
    let set = new Set();
    
    for (let i = 0; i < numCourses; i++) {
        hash[i] = []
    }
    
    for (let [course, preq] of prerequisites) {
        hash[course].push(preq)
    }
    
    const dfs = (crs) => {
        if (set.has(crs)) return false
        if (hash[crs].length === 0) return true;
        
        set.add(crs)
        for (let c of hash[crs]) {
            if (!dfs(c)) return false
        }
        set.delete(crs)
        hash[crs] = []
        return true
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    return true
};
