function leap(n){

    if(n % 4 ===0 && !(n % 100 ===0) || (n % 400 ===0 )){
        console.log("The year is leap year")
}
          else {
            console.log("The  year is not a leap year!") 
}
    
}