function range(start,end) {
    let rangeArray = [];
    for (let i=start;i<=end;i++){
        rangeArray.push(i)
    }
    console.log(rangeArray)
    return rangeArray;
}

let arrayRange = range(1,10)

function sumArray(array){
    let sumArrayValue = 0;
    for (let i=0; i<array.length; i++){
        sumArrayValue += array[i]
    }
    return sumArrayValue
}

console.log(sumArray(arrayRange))