

function range(start,end, step) {
    step = step || 1;
    let rangeArray = [];
    if (end > start) {
      for (let i=start;i<=end;i+=step){
          rangeArray.push(i)
      }
    } else {
        // for (let i=end;i>=start;i--){
        //     rangeArray.push(i)
        // }
        console.log("Perrito")
    }  
    console.log(rangeArray)
    return rangeArray;
}

let arrayRange = range(100,10)

function sumArray(array){
    let sumArrayValue = 0;
    for (let i=0; i<array.length; i++){
        sumArrayValue += array[i]
    }
    return sumArrayValue
}

console.log(sumArray(arrayRange))