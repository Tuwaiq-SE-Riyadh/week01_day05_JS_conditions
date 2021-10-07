Check(3)
function Check(num) {
    if(num%2==0){
        console.log("the number is even");
    }else{
        console.log("the number is odd");
    }
}

grade(3)
function grade(score) {
    if(score>=90){
        console.log("A");
    }else if (score>=80 &&score<=89) {
        console.log("B");        
    }else if (score>=70 &&score<=79) {
        console.log("C");
    }else if (score>=60 &&score<=69) {
        console.log("D");
    }else{
        console.log("F");
    }
}

//2000, 1900, 1992 is a leap year
leapYear(1992)
function leapYear(year) {
    if (year%4==0 && year%100!=0 || year%400==0){
        console.log("leap year");
    }else{
        console.log("Not a leap year!");
    }

}