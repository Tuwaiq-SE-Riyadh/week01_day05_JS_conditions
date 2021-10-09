
// even & odd numbers
function evenOddNumbers(num){
    if (num % 2 === 0) {
        console.log("number is even");
    } 
    else {
        console.log("number is odd");
    }
}


// Grade 
function grade(score) {
    if(score <= 100 && score >= 90){
        console.log("A")
    }
    else if (score <= 89 && score >= 80) {
        console.log("B")
    }
    else if (score <= 79 && score >= 70) {
        console.log("C")
    }
    else if (score <= 69 && score >= 60) {
        console.log("D")
    }
    else if (score <= 59) {
        console.log("F")
    }
    else {
        console.log("Wrong grade")
    }

}

// Leap year
function leapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("true");
    }
    else {
        console.log("false")
    }
}