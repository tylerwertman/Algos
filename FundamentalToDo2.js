// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
let arr = []
function countdown(num){
    for(let i=num;i>=0;i--){
        arr.push(i)
    }
    console.log(`The array is ${arr.length} characters long`)
    return arr
}
console.log(countdown(5))

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn([a,b]){
    console.log(a)
    return(b)
}
console.log(printAndReturn([1,2]))

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
let arr2 = [5,2,4,6,8] // 10
let arr3 = ["what", "does", "this", "do"] //what4
let arr4 = [false, "confusing?", "nope"] //3
function firstPlusLength(arr){
    sum=arr[0]+arr.length
    return sum
}
console.log(firstPlusLength(arr4))

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
let arr5 = [1,3,5,7,9,13]
let count = 0
function valuesGreaterThanSecond(arr){
    for (let i=0;i<arr.length;i++){
        if(arr[i]>arr[1]){
            count++
        }
    }
    return count
}
console.log(valuesGreaterThanSecond(arr5))

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
arr6 = [1,3,5,7,9,13]
arr7 = [1]
function valuesGreaterThanSecondGen(arr){
    let newArr = []
    if(arr.length<2){
        console.log(`Starting array is too short`);
        // return null
    }else{
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[1]){
                newArr.push(arr[i])
            }
        }
        return newArr

    }
}
console.log(valuesGreaterThanSecondGen(arr6))


// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function thisLengthThatValue(a,b){
    let arr = []
    if(a===b){
        console.log(`Jinx!`)
    }
    for(let i=0; i<a; i++){
        arr.push(b)
        // console.log(arr)
    }
    return arr
}
console.log(thisLengthThatValue(9,9))

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
let arr8= [1,2,3,4]
let arr9 = [5,4,3,2]
let arr10 = [4,3,2,1]
function fitTheFirstValue(arr){
    if(arr[0]>arr.length){
        console.log(`Too big!`)
    }else if(arr[0]<arr.length){
        console.log(`Too small!`)
    }else if(arr[0]==arr.length){
        console.log(`Just Right!`)
    }
}
fitTheFirstValue(arr8)
fitTheFirstValue(arr9)
fitTheFirstValue(arr10)

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function f2c(f){
    let c = (f-32)*.555;
    console.log(c)
}
f2c(212)
// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.
function c2f(c){
    let f
    for (let c=200; c>-212; c--){
        f=c*1.8+32
        // console.log(`f=${f}, c=${c}`)
        if(f==c){
            console.log(`F @ ${f} EQUALS C @ ${c}`)
        }
    }
}
c2f(212)