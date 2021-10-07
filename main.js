// even & odd numbers


function EvenOddNumber(num){
    if(num % 2 == 0){
        console.log("The Number is Even");
    }
    else{
        console.log("The Number is Odd");
    }
}

// Write a function that takes a score as an input and print the Grade
function Grade(score){

    if(score >= 90){
        console.log("The Grade is A");
    }
    else if(score <= 89 && score >= 80){
        console.log("The Grade is B")
    }
    else if(score <= 79 && score >= 70){
        console.log("The Grade is C")
    }
    else if(score <= 69 && score >= 60){
        console.log("The Grade is D")
    }
    else if(score <= 59){
        console.log("The Grade is F")
    }
}

function Leapyear(year){

    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log("year is leap");
    }
    else{
        console.log("year is not leap");
    }

}


// For Loop

// function Fibonacci (){

//     for (let index = 0; index <= 20; index++) {
//         let element = array[index];
        
//     }

// }