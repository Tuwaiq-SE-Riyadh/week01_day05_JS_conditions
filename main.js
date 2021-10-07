function oddEven(x){
    if (typeof x==="number"){
        if(x%2===0){
            console.log("is even number ")
        }
        else{
            console.log("is odd number ")
        }

    }else{
        console.log("Invalide input")
    }
    
   }

   function Grade(x){
    if (typeof x==="number"){
        if(x >= 90){
        console.log("Grade A")
        }else if (x >= 80){
            console.log("Grade B")
        }else if (x >= 70){
            console.log("Grade C")
        }else if (x >= 60){
            console.log("Grade D")
        }else if (x <= 59){
            console.log("Grade F")
        }

    }else{
        console.log("Invalide input")
    }
}


    function LeapYear(Year){
        if(typeof Year ==="number"){
            if(Year%4===0 && Year%100!==0 ||Year%400===0){
                console.log("is leap year")
            }else{
                console.log("is not leap year")
            }

        }else{
            console.log("Invalide input")
        }

    }
   