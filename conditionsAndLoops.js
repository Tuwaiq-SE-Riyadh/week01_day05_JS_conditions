console.log(evenOddNumbers(1));
console.log("-------------------");
console.log(switchStatment(90));
console.log("-------------------");
console.log(leapYear(2020));




function switchStatment(gread){

    switch(true) {
        case gread >= 90:
          console.log("A");
          break;
        case gread >= 80:
            console.log("B");
            break;
        case gread >= 70:
            console.log("C");
            break;
        case gread >= 60:
            console.log("D");
            break;
        case gread < 60:
            console.log("F");
            break;
      }
}




function evenOddNumbers(number){
if(number % 2 == 0){
    console.log("Even");
}else{
    console.log("Odd");  
}}



function leapYear(year){
if(year % 2 == 0){
    console.log("Even");
}else{
    console.log("Odd");  
}


if(year % 4 == 0 && year % 100 != 0 && year % 400 != 0){
    console.log("It's leap year");
}else{
    console.log("It's not leap year");  
}
}

