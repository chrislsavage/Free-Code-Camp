function convert(num) {
var less10 = num % 10;
var tens = (num - less10)/10;
var remainder="";
var result = "";
  var x = "" ;
if (less10 === 9) {
  remainder = "IX";
} else if (less10 === 4) {
  remainder = "IV";
} else {
  var i = less10 % 5;
  var v = (less10 - i)/5;
  if (v === 1) {
    remainder = "V";
  }
  for (var b = 1; b <= i; b++) {
    remainder += "I";
  }
}
for (var a = 1; a <= tens; a++) {
  x += "X";
  
}
  return x + remainder;
}

convert(36);