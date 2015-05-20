function fearNotLetter(str) {
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var index = alphabet.indexOf(str[0]);
  for (var i = 0; i < str.length; i++) {
   
    if (str[i] != alphabet[index + i]) {
     var newStr = alphabet[index+i];
      return newStr;
    }
   
  }
  return newStr;
}
