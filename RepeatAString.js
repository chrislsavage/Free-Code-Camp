function repeat(str, num) {
  var reStr = "";
  if (num < 0) {return reStr;}
for(var i = 0; i<num; i++) {
  reStr += str;
}
  return reStr;
}