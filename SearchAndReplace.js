function replace(str, before, after) {
var capitals = "ABCDEFGHIJKLMNOPQRSTUVQXWZ";
if (capitals.indexOf(before[0]) >= 0 ) {
  after = after.split('');
  after[0] = after[0].toUpperCase();
  after = after.join("");
}
var index = str.search(before);
var length = before.length;
str = str.split("");
str.splice(index, length, after);
return str.join("");
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");