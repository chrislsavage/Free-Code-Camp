/* We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. */

function sumAll(arr) {
    arr = arr.sort(function(a, b){return a-b});
var min = arr[0];
var max = arr[1];
var sum = 0;
for(i = min; i <= max; i++) {
   
    sum += i;
}
return sum;
}