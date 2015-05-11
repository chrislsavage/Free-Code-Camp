function permAlone(str) {
str = str.match(/([A-Za-z])+/g).join("").toLowerCase().split("").sort();
var endStr = "";
var length = 0
   function firstFactorial(num) { 
console.log(num)
if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 1;
    }
    else {
        return (num * firstFactorial(num - 1)); 
       
    }
}
for (var i = 0; i < str.length; i++) {
    if(str[i] != str[i+1]) {
        endStr += str[i]}
        length = endStr.length;
    }
return firstFactorial(length);

}




permAlone('abcdefa');