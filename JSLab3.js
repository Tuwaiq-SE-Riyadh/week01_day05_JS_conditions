

function evenOddNum(num){

if (num % 2 == 0){

    console.log("The number is even");
}
else{

    console.log("The number is odd");
}

}

function score(s){

   if (s >= 90) {console.log("The grade is A");}

   else if (s == 80 && s == 89) {console.log("The grade is B");}

   else if (s == 70 && s == 79) {console.log("The grade is C");}

   else if (s == 60 && s == 69) {console.log("The grade is D");}

   else{console.log("The grade is F");}

}

function leapYear(year){

    if (year % 4 == 0 && 4 % 100 == 0 && year % 400 == 0){
 
        console.log("The year is a leap year");}
    
    else {
        console.log("The year is not a leap year");
    }
}
