function oddNum(number){



    if (number%2==0){
    console.log ("numer is even")
}
else{
    console.log ("numer is odd")
}
}

function grade (number){

if(number>=90){
    console.log ("the grade is A")

}
else if (number>=80 & number<=89){
    console.log ("the grade isB")
}
else if (number>=70 & number<=79){
    console.log ("the grade is C")
}
else if (number>=60 & number<=69){
    console.log ("the grade is D")
}
else if(number<=59){
    console.log ("the grade is failur") 
}

}

function LeapYear(year) {

    
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}











