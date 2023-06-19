// Strings To Do 2


// Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

function reverseString(string) {
    let newStr = ""
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }
    return newStr
}
console.log(reverseString("this is a string"))
console.log(reverseString("creature"))

// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array. For array containing
// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].

function removeEvenLengthStrings(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 !== 0) {
            newArr[newArr.length] = arr[i]
        }
    }
    console.log(newArr)
}
removeEvenLengthStrings(["test", "test2", "testthree"])
removeEvenLengthStrings(["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."])


// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation.
//In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

function integerToROmanNumeral(num) {
    let roman = ""
    if (num >= 1000) {
        while (num >= 1000) {
            roman += "M"
            num -= 1000
        }
    }
    if (num >= 900) {
        while (num >= 900) {
            roman += "CM"
            num -= 900
        }
    }
    if (num >= 500) {
        while (num >= 500) {
            roman += "D"
            num -= 500
        }
    }
    if (num >= 400) {
        while (num >= 400) {
            roman += "CD"
            num -= 400
        }
    }
    if (num >= 100) {
        while (num >= 100) {
            roman += "C"
            num -= 100
        }
    }
    if (num >= 90) {
        while (num >= 90) {
            roman += "XC"
            num -= 90
        }
    }
    if (num >= 50) {
        while (num >= 50) {
            roman += "L"
            num -= 50
        }
    }
    if (num >= 40) {
        while (num >= 40) {
            roman += "XL"
            num -= 40
        }
    }
    if (num >= 10) {
        while (num >= 10) {
            roman += "X"
            num -= 10
        }
    }
    if (num >= 9) {
        while (num >= 9) {
            roman += "IX"
            num -= 9
        }
    }
    if (num >= 5) {
        while (num >= 5) {
            roman += "V"
            num -= 5
        }
    }
    if (num >= 4) {
        while (num >= 4) {
            roman += "IV"
            num -= 4
        }
    }
    if (num >= 1) {
        while (num >= 1) {
            roman += "I"
            num -= 1
        }
    }
    console.log(roman)
}

integerToROmanNumeral(444) 
integerToROmanNumeral(349)


// Roman Numerals to Integer
// Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”.
// Comprising 30 bronze gears, its wooden frame features 2000 characters.
// Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492. 

function romanNumeralsToInteger(str){
    
}
