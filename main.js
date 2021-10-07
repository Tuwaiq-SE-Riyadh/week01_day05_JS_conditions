function oddEvenNumber(x){
    if (x % 2 == 0){
        console.log(x +" is even number");
    }
    else {
        console.log(x + " is odd number");
    }
}
oddEvenNumber(2)

function grade(num){
    if (num >= 90){
        console.log("Grade is A");
    }
    if (num >= 80 && num < 90){
        console.log("Grade is B");
    }
    if (num >= 70 && num < 80){
        console.log("Grade is C");
    }
    if (num >= 60 && num < 70){
        console.log("Grade is D");
    }
    if (num < 60){
        console.log("Grade is F");
    }
}
grade(90)