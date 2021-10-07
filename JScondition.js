function check(number){
if (number % 2 ==0){
    console.log("the number is even")
}else{
    console.log("the number is odd")
}
}
function grade(score){
    if(score >=90){
        console.log("th grade is A")
    }
    else if(score >=80 || score <=89){
console.log("the grade is B")
    }
    else if(score >=70 || score <=79){
console.log("the grade is C")
    }
    else if (score <=59){
console.log("the grade is F")
    }
}
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}