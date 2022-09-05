/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
   //sort the array in non-increasing (descending i.e highest to Lowest)
    boxTypes.sort((a,b)=>{
       return b[1]-a[1]
    })
    // initialize max unit equal to zero
    let maxUnit = 0;
    
    for(let i = 0; i < boxTypes.length; i++){
        //first check if truckSize is less than or eq to zero because it (truckSize) will keep decrementing and break out of the loop
        if(truckSize <= 0){
            break;
        }
        //if truckSize is greater than numberOfBoxes (boxTypes[i][0]) of type i , 
        if(truckSize > boxTypes[i][0]){
            // multiply numberOfBoxes (boxTypes[i][0]) and  numberOfUnitsPerBox (boxTypes[i][1]) , add to maxUnit
            maxUnit += boxTypes[i][0] * boxTypes[i][1]
            // decrement truckSize by numberOfBoxes (boxTypes[i][0])
            truckSize -= boxTypes[i][0]
        }
        else{
            // since truckSize is less than numberOfBoxes (boxTypes[i][0]) of type i, multiply truckSize and  numberOfUnitsPerBox (boxTypes[i][1]) , add to maxUnit
            maxUnit += truckSize * boxTypes[i][1]
            // decrement truckSize by numberOfBoxes (boxTypes[i][0])
            truckSize -= boxTypes[i][0]
        }
    }
    
    return maxUnit
};