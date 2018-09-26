
function counteLetters(string){
  var object = {};
  var stringArray = [];
  for(var i = 0; i < string.length; i++){
    if( string[i] !== ' '){
      stringArray.push(string[i]);
    }
  }

  for(var j = 0; j< stringArray.length; j++){
    if(object[stringArray[j]]){
      object[stringArray[j]] += 1;
    }
    else{
      object[stringArray[j]] = 1;
    }
  }

  return object;
}

console.log(counteLetters('lighthouse in the house'));



