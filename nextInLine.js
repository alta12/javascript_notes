function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("Before: " + JSON.stringify(testArr));
//JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax
