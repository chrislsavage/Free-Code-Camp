function rot13(str) {
  var encoded = [];

  for (var i = 0; i < str.length; i++) {
  	var code = str.charCodeAt(i);

  	if (code < 65 || code > 90) {
  		encoded.push(code);
  	} else {
  		if (code > 77) {
  			code -= 13 ;
  			encoded.push(code);
  		} else {
  			code += 13;
  			encoded.push(code);
  		}
  	}
  }
  return String.fromCharCode.apply(null, encoded);
}
