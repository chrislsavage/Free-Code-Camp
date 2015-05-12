function largestOfFour(arr) {
  var largestArr = [];
  for (var i = 0; i< arr.length; i++) {
    arr[i] = arr[i].sort( function (a,b) {return a - b})
    var largestNum = arr[i][arr[i].length -1]
    largestArr = largestArr.concat(largestNum);
  }
  return largestArr;
}