// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it.
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
        // console.log('min', min)
    }
    let newArr = []
    newArr[0] = min
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            newArr[newArr.length] = arr[i]
        }
    }
    newArr[0] = min;
    console.log(newArr)
}

minToFront([4, 2, 1, 3, 5])
minToFront([6,7,8,9,10,5])