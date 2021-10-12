//## If else statement
// even & odd numbers
// Write a function that takes a number as an input. 
// Write an if else statement in the function to check if the number is even or odd, and print the result in the console.

function check(number){
if(number%2 == 0){
    console.log(number +" is even")
}
else{
 
    console.log(number +" is odd")
}}

//Write a function that takes a score as an input and print the Grade
function grade(number){
    if(number>=90){
    console.log("the grade is A");
    }

    else if (number>=80 && number<=89){
        console.log("the grade is B");
        }

        else if (number>=70 && number<=79){
            console.log("the grade is C");
            }
            else if (number>=60 && number<=69){
                console.log("the grade is D");
                }
                else if (number<=59){
                    console.log("the grade is F")
                    }
}

//Leap year (Bonus)
function year(number){
    if(number%4==0 && number%100!=0 || number%400==0 ){
        console.log(number + "is the year is leap")
    }
    else {
        console.log(number + "is the year is not leap")
    }

    
}


