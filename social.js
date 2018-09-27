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

var keyArray = Object.keys(data);




function followChart(){
  var object = {};
  var counter = 0;

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

// console.log(followingMostPeople());

function mostFollowers(){
  var counter = 0;
  var mostFollowers;
  var chart = followChart();
  var keyArray2 = Object.keys(followChart());
  var currentFollowers = chart[keyArray2[0]].followers;

  for(var key in chart){
    if(chart[key].followers > currentFollowers ){
      currentFollowers = chart[key].followers;
      mostFollowers = chart[key].name;
    }
    else if(chart[key].followers === currentFollowers ){
      mostFollowers += ' ' + chart[key].name;
    }
    counter++;
  }

  return mostFollowers;
}

// console.log(mostFollowers());
function mostFollwers30(){
  var counter = 0;
  var mostFollowers;
  var chart = followChart();
  var keyArray2 = Object.keys(followChart());
  var currentFollowers = chart[keyArray2[0]].followers;

  for(var key in chart){
    if(chart[key].followers > currentFollowers && data[keyArray[counter]].age > 30 ){
      currentFollowers = chart[key].followers;
      mostFollowers = chart[key].name;
    }
    else if(chart[key].followers === currentFollowers && data[keyArray[counter]].age > 30 ){
      mostFollowers += ' ' + chart[key].name;
    }
    counter++;
  }

  return mostFollowers;
}

// console.log(mostFollwers30());

function followingMost30(){
  var followingMost;
  var currentFollowing;

  for(var key1 in data){
    if(data[key1].age > 30){
      currentFollowing = data[key1].follows.length;

      break;
    }
  }

  // console.log(currentFollowing);

  for(var key in data){
    if(data[key].follows.length > currentFollowing && data[key].age > 30){
      currentFollowing = data[key].follows.length;
      followingMost = data[key].name;
    }
  }

  return followingMost;

}
// console.log(followingMost30());

function noFollowBack(){
  var object = {};

  for(var key1 in data){
    var checker2 = false;
    for(var i = 0; i < data[key1].follows.length; i ++){
      var checker = data[data[key1].follows[i]].follows.indexOf(key1) > -1;
      if(checker === false){
        checker2 = true;
      }
    }
    if(checker2 === true){
      object[key1] = {
        name: data[key1].name
      }
    }
  }

  return object;
}

// console.log(noFollowBack());

function socialReach(){
  var followerChart = {};
  var object = {};

  for(var key1 in data){
    followerChart[key1] = {
      name: data[key1].name,
      following: data[key1].follows,
      followCount: data[key1].follows.length
    }
  }

  for(var key2 in followerChart){

    object[key2] = {
      name: followerChart[key2].name,
      reachCount: followerChart[key2].followCount
    };

    for(var i = 0;i < followerChart[key2].following.length; i++){
      object[key2].reachCount += followerChart[followerChart[key2].following[i]].following.length;
    }

  }

  return object;
}

console.log(socialReach());

































