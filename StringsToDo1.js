// Strings To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(string){
    var toArr = string.split(" ")
    var toStr = toArr.join("")
    console.log(toStr)
}
removeBlanks(" Pl ayTha tF u nkyM usi c ")
removeBlanks("I can not BELIEVE it's not BUTTER")

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(string){
    let Digits = []
    for(let i=0;i<string.length;i++){
        if (!isNaN(string[i])){
            Digits.push(string[i])
        }
    }
    let newDigits = Digits.join("")
    console.log(newDigits)
}
getDigits("abc8c0d1ngd0j0!8")


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(string){
    let arr=[]
    if(!string[0]===" "){
        arr.push(string[0])
        // console.log(arr)
    }
    for (let i=0;i<string.length;i++){
        if(string[i]===" "){
            arr.push(string[i+1])
        }
    }
    let newStr = arr.join("").toUpperCase()
    console.log(newStr)
}
acronym(" there's no free lunch - gotta pay yer way. ")
acronym("Live from New York, it's Saturday Night!")

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(string){
    let count = 0
    for (let i=0;i<string.length;i++){
        // if(!string[i]===" "){ //why doesnt this work?
        //     count++
        // }
        if(!string[i]==" "){
            count++
        }
        if(string[i]==" "){
            count--
        }
    }
    console.log(count)
    return count
}
countNonSpaces("Honey pie, you are driving me crazy")
countNonSpaces("Hello world !")

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(array, num){
    let newArr = []
    for(let i=0; i<array.length; i++){
        if(array[i].length>=num){
            newArr.push(array[i])
        }
    }
    console.log(newArr)
}
removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)