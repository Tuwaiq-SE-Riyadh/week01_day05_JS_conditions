function EvenOddNumbers(num){

    if(num%2 === 0){
        console.log("number "+num+" is even")
    }

    if(num%2 !== 0){
        console.log("number "+num+" is odd")
    }
}


function scoreGrade(score){

    if (score >= 90){
        console.log("grade is A")
    }

    else if (score >= 80 && score <= 89){
        console.log("grade is B")
    }

    else if (score >= 70 && score <= 79){
        console.log("grade is C")
    }

    else if (score >= 60 && score <= 69){
        console.log("grade is D")
    }

    else {
        console.log("grade is F") 
    }
}


function Leapyear(year){
    if (((year%4) == 0 && (year%100) !== 0) || (year%400 === 0)){
        console.log("it is a leap year")
    }

    else{
        console.log("it is not a leap year")
    }
}