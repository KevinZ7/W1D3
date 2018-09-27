var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};




function followChart(){
  var object = {};
  var keyArray = Object.keys(data);
  var counter = 0;

  console.log(keyArray);
  console.log(data.length);

  for(var key in data){
    object[keyArray[counter]] = {
      name: data[key].name,
      following: data[key].follows.length,
      followers: 0
    }

    for(key2 in data){
      if(data[key2].follows.includes(keyArray[counter])){
        object[keyArray[counter]].followers += 1;
      }
    }

  counter ++;
  }
  return object;
}

// console.log(followChart());

function followingMostPeople(){
  var keyArray = Object.keys(data);
  var followingMost = data[keyArray[0]].name;
  var currentFollowing = data[keyArray[0]].follows.length;
  for(var key in data){
    if(data[key].follows.length > currentFollowing){
      currentFollowing = data[key].follows.length;
      followingMost = data[key].name;
    }
  }

  return followingMost
}

console.log(followingMostPeople());
