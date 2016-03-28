function pair(str) {
str = str.split("");
var answer = [];
for (var i =0; i < str.length; i++) {
  switch (str[i]) {
   case "A": 
      answer.push(["A", "T"]);
      break;
   case "T": 
      answer.push(["T", "A"]);
      break;
   case "C": 
      answer.push(["C", "G"]);
      break;
   case "G": 
      answer.push(["G", "C"]);
      break;  
  }
}
return answer;
}

pair("GCG");