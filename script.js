

// Push Front: Given an array and an additional value, insert this value at the beginning of the array.


function addFront(arr, val){    // Without using .push()
    let newArray = [];
    for (var i = 1; i <= arr.length; i++){
        newArray[i] = arr[i-1];
    }
    newArray[0] = val;
    return newArray;
}


function pushFront(arr, val) {    // Using .push()
    let newArray = [val];
    for (var i = 0; i < arr.length; i++){
        newArray.push(arr[i]);
    }
    return newArray;

}

// Pop Front: Given an array, remove and return the value at the beginning of the array. print the array to the console to prove the value was removed


function removeFront(arr){    // Without using .pop()
    let newArray = [];
    for (var i = 0; i < (arr.length - 1); i++){
        newArray[i] = arr[i + 1];
    }
    console.log(newArray);
    return arr[0];
}


// Insert At: Given an array, index, and additional value, insert the value into array at given index

function insertAt(arr, ind, val) {
    let newArray = [];
    for (var y = 0; y < ind; y++){
        newArray[y] = arr[y];
    }
    for (var i = ind; i < arr.length; i++){
        newArray[i+1] = arr[i];
    }
    newArray[ind] = val;
    return newArray;
}


// Test Cases for Functions

console.log(pushFront([2, 3, 4, 5], 10)); // Success
console.log(addFront([1, 2, 3, 4], 11)); // Success
console.log(removeFront([5, 6, 7, 8])); // Success
console.log(insertAt([10, 11, 12, 13, 14], 2, 50)); // Success

