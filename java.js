function check(num){
    if (num%2 ===0 ){
        console.log("The Number is Even");
        
    }
    else{
        console.log("The Number is Odd"); 
    }
}

function checkScore(score){
    if (score >=90){
        console.log("Your grade is A");
    }
    else if (score >=80){
        console.log("Your grade is B");
    }
    else if (score >=70){
        console.log("Your grade is C");
    }
    else if (score >=60){
        console.log("Your grade is D");
    }
    else {
        console.log("Your grade is F");
    }
}

function checkLeapYear(year){
    if (year%4 ===0 ){
        console.log("The Year is Leap Year");
        
    }
    else{
        console.log("The Year is NOT Leap Year"); 
    }
}