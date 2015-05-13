function chunk(arr, size) {
var length = Math.abs(arr.length - size);
var index = size ;
var arr2 = [];
var fullArr = [];
arr2 = arr.splice(index, size);
fullArr.push(arr, arr2);
  return fullArr;
  
  
}