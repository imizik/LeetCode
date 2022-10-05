/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount]
    if (amount < 0) return -1
    if (amount === 0) return 0
    
    let count = null;
    for (let coin of coins) {
        let remainder = amount - coin;
        let counter = coinChange(coins, remainder, memo)
        
        if (counter >= 0) {
            let curr = counter + 1
            if (count === null || curr < count) {
                count = curr
            }
        }
        
    }
    
    let setter = count === null ? -1 : count
    memo[amount] = setter
    return setter
};