/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let hash = {}
  for (let i = 0; i < numCourses; i++) {
      hash[i] = []
  }
  for (let [course, preq] of prerequisites) {
      hash[course].push(preq)
  }
    
    let set = new Set();
    
    const dfs = (course) => {
        if (set.has(course)) return false
        if (hash[course].length === 0) return true
        
        set.add(course)
        
        for (let adj of hash[course]) {
            if (!dfs(adj)) return false
        }
        set.delete(course)
        hash[course] = []
        return true
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    return true
};