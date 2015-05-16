function diff(arr1, arr2) {
  var newArr = [];
  var greater = [];
  var least = [];
  if(arr1.length > arr2.length) {
    greater = arr1;
    least = arr2;
  } else {
     greater = arr2;
   least = arr1;
  }
 console.log( least, greater)
for (var i = 0; i < greater.length; i++) {
  if(least.indexOf(greater[i]) < 0) {
    newArr += greater[i];
  }
}
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);