function oddEven(x){
if (x%2==0){
    console.log("the number "+(x)+" is even ");
}
else {
    console.log("the number"+(x)+" odd");}
}

function score(x){
if (x>=90){
    console.log(" the grade is A");
}
 else if( x>=80||x<=89){
    console.log(" the grade is B");
 }
 else if( x>=70||x<=79){
    console.log(" the grade is C");
 }
 else if( x>=60||x<=69){
    console.log(" the grade is D");
 }
 else {
     console.log("the grade is F");
 }
}
function year (x){

if ((x%4==0)&& (x%100!=1)||(x%100==0)){
console.log("the year "+(x)+" is a leap year");
}
else {
    console.log("the year "+(x)+" is not a leap year");

}

}
