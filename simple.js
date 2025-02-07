// console.log("hello world")
let var1 = 25;
let var2 = 25;
let sumas;

// console.log(perro + gato);
// console.log(perro * gato);

function suma() {
 sumas = var1 + var2;
 document.write("The sum of values is " + sumas)
};

function loopTriangle() {
    let triangle = "";

    for(let i=0; i <= 6 ; i++) {
        triangle += "#";
        document.write(triangle + "<br>");
    }
};

function fizzBuzz() {
    let value = 0; 

    for (let j=0; j<=99; j++){
        value += 1;
        if(value % 3 === 0 && value % 5 === 0 ) {
            document.write("FizzBuzz <br>")
        } else
        if(value % 3 === 0 ) {
            document.write("Fizz <br>")
        } else
        if(value % 5 === 0 ) {
            document.write("Buzz <br>")
        } else
        document.write(value + "<br>")
    }
}

function chessBoard() {
    let board = " ";

    for (let k=0; k<=8; k++) {
        for (let l=0; l<=8; l++){
            if(l %2 ==0) {
              board += "#"
            } else{
              board += " "
            }     

        } board += "<br>"
    } 
    return document.write(board)
}

function square() {
    let number = document.getElementById('numFunc').value
 return document.write(number * number)
}


function minNumber() {
    // return document.write(Math.min(document.getElementById('idValueA').value,document.getElementById('idValueB').value))
    const valueA = document.getElementById('idValueA').value; 
    const valueB = document.getElementById('idValueB').value;

    if(valueA == valueB){
       return document.write("Both numbers are the same")
    } else if (valueA < valueB){
            return document.write(valueA)
        } else {
            return document.write(valueB)
        }
}

function isEven() {
    let allValues = " "
    let responseString = "";
    const value = document.getElementById('idInputValue').value;

    for (; value>1; value-=2) {
        allValues += `${value} minus 2 = ${value-2} <br>`;
        //
        }
    if (value===0) {responseString = "Your number is even"} else {
    responseString = "Your number is odd"
        }
        return document.write(allValues+responseString)
       
}

function countBs() {
    const stringToCheck = document.getElementById('idString').value;
    let numberOfMatches = 0;

    for (let i=stringToCheck.length; i>0; i--){
        if(stringToCheck[i-1] == "B") {
            numberOfMatches += 1;
        }
    }
    return document.write(`The number of "B" character in your string is ${numberOfMatches}`)
}

function countChar() {
    const stringToCheckChar = document.getElementById('idStringToCheck').value;
    const charToChecK = document.getElementById('idCharToCheck').value
    let numberOfCharMatchesB = 0;

    for (let i=stringToCheckChar.length; i>0; i--){
        if(stringToCheckChar[i-1] == charToChecK) {
            numberOfCharMatchesB += 1;
        }
    }
    return document.write(`The number of "${charToChecK}" characters in your string is ${numberOfCharMatchesB}`)
}

function fibonacci() {
    let firstValue = 0;
    let secondValue = 1;
    let tempValue = 0;

    console.log(firstValue);
    console.log(secondValue)

    for (let i=0; i <= 9; i++) {

        tempValue = firstValue + secondValue;
        console.log(tempValue)
        firstValue = secondValue;
        secondValue = tempValue;
    
    }

} 

