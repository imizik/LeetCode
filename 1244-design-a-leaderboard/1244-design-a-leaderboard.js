
/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

class Leaderboard {
    constructor() {
        this.map = {};
    }
    
    addScore(playerId, score) {
        this.map[playerId] ? this.map[playerId] += score : this.map[playerId] = score
    }
    
    top(K) {
        const sorted = Object.entries(this.map).sort((a,b) => b[1] -a[1])
        
        let total = 0;
        
        for (let i = 0; i < K; i++) {
            total += sorted[i][1]
        }
        return total
    }
    
    reset(playerId) {
        this.map[playerId] = null
    }
}