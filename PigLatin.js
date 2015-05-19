function translate(str) {
var vowels = "aeiou";
var index = 0;
var cons = "";
if (vowels.indexOf(str[0]) != -1) {
  return str + "way";
  }
for (i=0; i<str.length; i++) {
    
  if(vowels.indexOf(str[i]) != -1) {
    index = i;
    console.log();
    cons = str.substr(0, i) + "ay";
    i = str.length;
    
  }
  
}
return str.substr(index,str.length -1) + cons;
}