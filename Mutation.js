function mutation(arr) {
  var bool = true;
  for(var i = 0; i<arr[1].length; i++) {
    if(arr[0].indexOf(arr[1][i]) != -1) {
      bool = true;
    } else {
      bool = false;
    }
  }
  return bool;
}