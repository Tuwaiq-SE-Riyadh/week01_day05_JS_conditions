
// ----------------------Grade-------------------------------

function Grade(avg){

    if (avg < 60){
        console.log("Grade : F");      
        } 
      else if (avg < 70) {
              console.log("Grade : D"); 
                } 
      else if (avg < 80) 
           {
              console.log("Grade : C"); 
      } else if (avg < 90) {
              console.log("Grade : B"); 
      } else if (avg < 100) {
              console.log("Grade : A"); 
    }
}

// --------------------even & odd numbers---------------------

function numbers(num){

    if(num %2 == 0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}


// ------------------Leap year (Bonus)------------------------


function leapYear(year){
    
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
            console.log(" is a leap year.");
            else
            console.log(" is not a leap year.");
        }
        else
        console.log(" is a leap year.");
    }
    else
    console.log(" is not a leap year.");
}