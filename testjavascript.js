
//////////////////////////////////////////////// The sum of a range /////////////////////////////////////////////////////////////////
function range(start,end, step) {
    
    let rangeArray = [];
    if (end > start) {
        step = step || 1;
      for (let i=start;i<=end;i+=step){
          rangeArray.push(i)
      }
    } else {
        step = step || -1;
        for (let i=start;i>=end;i+=step){
            rangeArray.push(i)
        }
    }  
    console.log(rangeArray)
    return rangeArray;
}

let arrayRange = range(10,100)

function sumArray(array){
    let sumArrayValue = 0;
    for (let i=0; i<array.length; i++){
        sumArrayValue += array[i]
    }
    return sumArrayValue
}

console.log(sumArray(arrayRange))