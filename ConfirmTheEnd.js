function end(str, target) {
  var length = target.length;
  var index = str.length;
if(str.substr(index - length, length) === target) {return true;}
  return false;
}