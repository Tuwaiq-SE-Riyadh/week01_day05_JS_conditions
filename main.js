// Grade function using switch  
function grades(grade) {

    switch (grade) {
        case "A":

            console.log("Grade is 90 and above")
            break;
        case "B":
            console.log("Grade of 80 to 89 ")
            break
        case "C":
            console.log("Grade of 70 to 79 ")
            break
        case "D":
            console.log("Grade of 60 to 69")
            break
        case "F":
            console.log("Grade of 59 or below ")
            break

    }

}

//even & odd numbers
function oddEven(num) {
    if (num % 2 === 0) {
        consle.log("The number " + num + " is even ")
    } else {
        console.log("The number " +
            num + " is odd ")
    }
}
// Leap year used this site to help how to calculate leap year 
//https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript

function LeapY(year) {
    if ((year % 400 === 0) || (year % 4) === 0) {
        console.log("It  is a leap year")
    } else {
        console.log("It is a not leap year")
    }

}