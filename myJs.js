function getEvenOrOdd(number)
{
    return(number % 2 === 0 ? true : false)
}

function getGrade(grade)
{
    if(grade>90)
    {
        return "A"
    }
    else if(grade >= 80 && grade <= 98)
    {
        return "B"
    }
    else if(grade >= 70 && grade <= 79)
    {
        return "C"
    }
    else if(grade >= 60 && grade <= 69)
    {
        return "D"
    }
    else
    {
        return "F"
    }
}

// Bounes ( Leap year )
function LeapYear(year)
{
    if(year%400 === 0 ||(year % 4 === 0 && year %100 !== 0))
    {
        console.log("true")
    }
    else{
        console.log("false")
    }
}