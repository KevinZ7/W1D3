
function counteLetters(string){
  var object = {};
  var stringArray = string.split(' ').join('').split('');


  for(let j = 0; j< stringArray.length; j++){

    if(object[stringArray[j]]){
      object[stringArray[j]].push(j);
    }
    else{
      object[stringArray[j]] = [];
      object[stringArray[j]].push(j);
    }

  }
  return object;
}

console.log(counteLetters('lighthouse in the house'));


//question about the



