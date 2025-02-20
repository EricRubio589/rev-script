
///////////////////////////////////////// Reversing an Array //////////////////////////////////////////////

let myArray = ["A","B","C","D"]
let revArray = [];

function reverseArray(array) {

    for (let i=array.length-1; i>-1; i--) {
        revArray.push(array[i])
    }
    return revArray
}

function reverseArrayInPlace(array){

    let temp = "";
    let half = Math.floor(array.length/2)
    for (let i=0; i<half; i++){
        temp = array[i]
        array[i] = array[array.length-[i+1]]
        array[array.length-[i+1]] = temp
    } return array

}

console.log(myArray)
console.log(reverseArray(myArray));
console.log("");
console.log(reverseArrayInPlace(myArray));