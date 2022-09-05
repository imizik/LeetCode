/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
    let total = 0;
    
    for (let [type, units] of boxTypes) {
        while (type > 0) {
            total += units;
            type--
            truckSize--
            if (truckSize === 0) return total
        } 
    }
    return total
};