/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue();
    
    for (let stone of stones) {
        pq.enqueue(stone)
    }
    
    while (pq.size() > 1) {

        console.log(pq.size())
        let first = pq.dequeue()
        let second = pq.dequeue()
        console.log('asfs', first, second)
        if (first.element > second.element) pq.enqueue(first.element - second.element) 
    }
    console.log(pq.isEmpty())
    return pq.size() === 1 ? pq.dequeue().element : 0
};