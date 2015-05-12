function truncate(str, num) {
    console.log(str.length);
    var index = 0;
 if (str.length <= num) { return str;}
 for(var i=0; i <= num; i++) {
     if(str[i] === " ") {
         index = i;
     }
 }
 if(index === 0){
  return str.slice(0, num) + "...";}
  return str.slice(0, index) + "...";
}