function where(collection, source) { 
var arr = [];  
for(i=0;i<collection.length;i++){ 
var flag = false; 
for(var key in source){ 
     console.log(collection[i][key], source[key]);
if(collection[i][key] == source[key]){ 
    console.log(collection[i][key], source[key]);
flag = true; 
} 
}
 if(flag) arr.push(collection[i]); 
}  
return arr; } 

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });