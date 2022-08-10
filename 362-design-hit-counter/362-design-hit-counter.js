
class HitCounter {
    constructor() {
        this.stamps = []
        this.index = 0
    }

}

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.stamps.push(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while (timestamp - this.stamps[this.index] >= 300) {
        this.index++
    }
    return this.stamps.length - this.index
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

