// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr, num) {
    arr[arr.length] = arr.length - 1
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = num
    console.log(arr)
}
pushFront([5, 7, 2, 3], 8)
pushFront([99], 7)

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    // arr.splice(-1,1) // did not use .pop() 😅
    let newArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i]
    }
    console.log(newArr)
    return arr[0]
}
popFront([0, 5, 10, 15])
popFront([4, 5, 7, 9])

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, idx, num) {
    arr[arr.length] = arr[arr.length - 1]
    for (let i = arr.length - 1; i > idx; i--) {
        arr[i] = arr[i - 1]
    }
    arr[idx] = num
    console.log(arr)
}
insertAt([100, 200, 5], 2, 311)
insertAt([9, 33, 7], 1, 42)

// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
// Examples:
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

function removeAt(arr, idx) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (i !== idx) {
            newArr.push(arr[i])
        }
    }
    // for(i=0;i<newArr.length;i++){

    // }
    console.log(newArr)
    return arr[idx]
}
console.log(removeAt([1000, 3, 204, 77], 1))
console.log(removeAt([8, 20, 55, 44, 98], 3))

// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
// Examples:
// swapPairs([1,2,3,4]) => [2,1,4,3]
// swapPairs(["Brendan",true,42]) => [true,"Brendan",42]

function swapPairs(arr) {
    if (arr.length % 2 !== 0) {
        console.log(arr)
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 0) {
                let temp = arr[i - 1]
                arr[i - 1] = arr[i]
                arr[i] = temp
            }
        }
        console.log(arr)
    }
}
swapPairs([1, 2, 3, 4])
swapPairs(["Brendan", true, 42])
swapPairs([3, 6, 2, 8, 4, 9])

// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!
// Examples:
// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]

function removeDupes(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr[newArr.length-1] !== arr[i]) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

removeDupes([-2, -2, 3.14, 5, 5, 10])
removeDupes([9, 19, 19, 19, 19, 19, 29])