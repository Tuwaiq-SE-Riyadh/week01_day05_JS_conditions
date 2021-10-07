function oddEven(number){
    
    if(number % 2==1){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

function grade(score){
if(grade > 90){
console.log("Grade is A");
}
else if(grade < 89 && grade > 80 ){
    console.log("Grade is B");
}
else if(grade < 79 && grade > 70 ){
    console.log("Grade is C");
}
else if(grade < 69 && grade > 60 ){
    console.log("Grade is d");
}
else if(grade < 59  ){
    console.log("Grade is F");
}
else {
    console.log("The score uncorrect");
}

}

function checkLeapYear(year) {

    if (( year % 4 == 0 ) && (year % 100 != 0  ) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
