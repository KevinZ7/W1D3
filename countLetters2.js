
function counteLetters(string){
  var object = {};
  var stringArray = string.split('');


  for(let j = 0; j< stringArray.length; j++){

    if(object[stringArray[j]]){
      object[stringArray[j]].push(j);
    }
    else{
      if(!(stringArray[j] ===  ' ')){
        object[stringArray[j]] = [];
        object[stringArray[j]].push(j);
      }
    }

  }
  return object;
}

console.log(counteLetters('lighthouse in the house'));


//question about the
