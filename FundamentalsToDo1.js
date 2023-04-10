// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42; // set initiial values
var myName = `Tyler`;
var temp = myNumber; //use a temp var to retain one of them
myNumber = myName;
myName = temp;
console.log(`My name is not ${myName} & my number is not ${myNumber}`)

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
for (let i = -52; i<1067; i++){
    console.log(i)
}

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful(){
    console.log(`good morning!`)
}
for (let i = 0; i<99; i++){ // for loop repeats the fn 98 times from i=0 to i=98
    beCheerful()
}

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (let i = -300; i<1; i++){
    if(i===-3 || i===-6){ // if i is -3 or -6, continue aka skip to the next value of i
        continue
    }
    if(i%3==0){
        console.log(i)
    }
}
// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
let i=2000;
while (i<5281){
    console.log(i)
    i++ // important to prevent stack overflow
}

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
let birthMonth = 9;
let birthDay = 24;
function isBirthday(a,b){
    if(a==birthDay||a==birthMonth){
        if(b==birthDay||b==birthMonth){
            console.log(`How did you know?`)
        }else{
            console.log(`Just another day...`)
        }
    }else{
        console.log(`Just another day...`)
    }
}
isBirthday(24,9)
// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
function isLeapYear(year){
    if(year%4==0 && year%100!=0){ // if year is divisible by 4 and not by 100
        console.log(`${year} is a leap year`)
    }
    else if(year%400==0){ // alterantively if i is divibisble by 400
        console.log(`${year} is a leap year`)
    }
}
isLeapYear(1100)
// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let arr = [];
for (let i = 512; i<4096; i++){
    if(i%5==0){ // if i is divisible by 5
        console.log(i);
        arr.push(i) // add i to array to use for .length aka total count
    }
}
console.log(arr.length) // how many there were

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
let j=5;
while (j<60000){
    j++
    if(j%6==0){
        console.log(j)
    }else{
        continue
    }
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for (let i=1; i<101; i++){
    if(i%5==0 && i%10==0){
        console.log("Coding Dojo")
    }else if(i%5==0){
        console.log("Coding")
    }else{console.log(i)}
}

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
function parameter(param){
    console.log(param)
}
parameter(`this is the parameter`)

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
for (i=-300000; i>300000; i+2){
    sum+=i;
}
console.log(i)

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
let k=2016
let arr2=[]
while (k>0){
    console.log(k);
    k-=4
}

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
function flexibleCountdown (lowNum, highNum, mult){
    // console.log(result)
    for (let i=(highNum/mult); lowNum=i; i--){
        let result = mult*i
        console.log(result)
    }
}
flexibleCountdown(2,9,3)
flexibleCountdown(1,10,2)

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function finalCountdown(mult, lowNum, highNum, skip){
    let i=1
    let result = mult*i
    while(i<=(highNum/mult)){
        result=mult*i
        i++
        if(result==skip){
            continue
        }
        if(lowNum<result && result<highNum){

            console.log(result);
        }
    }
}
finalCountdown(3,5,17,9)
finalCountdown(4,5,37,12)