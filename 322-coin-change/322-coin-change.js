/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo={}) {
    if (amount in memo) return memo[amount]
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    let min = Number.MAX_SAFE_INTEGER
    let count;
    
    for (let coin of coins) {
        const newAmount = amount - coin;
        count = coinChange(coins, newAmount, memo)
        if (count !== -1) min = Math.min(min, count + 1)
    }
    
    (min=== Number.MAX_SAFE_INTEGER) ? memo[amount]=-1 : memo[amount]=min;
    return memo[amount]
    
    
};