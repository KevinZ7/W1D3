var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    for(var key1 in this.playlists){
      console.log(this.playlists[key1].id + ': ' + this.playlists[key1].name + " - " + this.playlists[key1].tracks.length + " tracks");
    }
  },

  printTracks: function () {
    for(var key1 in this.tracks){
      console.log(this.tracks[key1].id + ': ' + this.tracks[key1].name + ' (' + this.tracks[key1].album + ')');
    }
  },

  printPlaylist: function(playlistId){
    console.log(this.playlists[playlistId].id + ': ' + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
    for(var key1 in this.tracks){
      for(var i in this.playlists[playlistId].tracks){
        if(this.tracks[key1].id == this.playlists[playlistId].tracks[i]){
          console.log(this.tracks[key1].id + ': ' + this.tracks[key1].name + ' (' + this.tracks[key1].album + ')');
        }
      }
    }
  },

  addTrackToPlaylist: function(trackId, playlistId){
    var checker1 = false;
    var checker2 = false;
    for(var key in this.tracks){
      if(trackId == this.tracks[key].id){
        checker1 = true;
      }
    }
    for(var key1 in this.playlists){
      if(playlistId == this.playlists[key1].id){
        checker2 = true;
      }
    }


    if(checker1 && checker2){
      this.playlists[playlistId].tracks.push(trackId);
      console.log(this.playlists);
    }
    else{
      console.log("Sorry, the track or playlist that you have entered does not exist");
    }
  },

  uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack : function (name, artist, album) {
    var unique = this.uid();
    library.tracks[unique] = {
      id: unique,
      name: name,
      artist: artist,
      album: album
    }
  },

  addPlaylist : function (name) {
    var unique = this.uid();
    library.playlists[unique] = {
      id: unique,
      name: name,
      tracks: []
    }
  }




}

// ls


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//   for(var key1 in library.playlists){
//     console.log(library.playlists[key1].id + ': ' + library.playlists[key1].name + " - " + library.playlists[key1].tracks.length + " tracks");
//   }
// }

//printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
//   for(var key1 in library.tracks){
//     console.log(library.tracks[key1].id + ': ' + library.tracks[key1].name + ' (' + library.tracks[key1].album + ')');
//   }
// }

// printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function (playlistId) {

//   console.log(library.playlists[playlistId].id + ': ' + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
//   for(var key1 in library.tracks){
//     for(var i in library.playlists[playlistId].tracks){
//       if(library.tracks[key1].id == library.playlists[playlistId].tracks[i]){
//         console.log(library.tracks[key1].id + ': ' + library.tracks[key1].name + ' (' + library.tracks[key1].album + ')');
//       }
//     }
//   }
// }

// printPlaylist("p02");


// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
//   var checker1 = false;
//   var checker2 = false;
//   for(var key in library.tracks){
//     if(trackId == library.tracks[key].id){
//       checker1 = true;
//     }
//   }
//   for(var key1 in library.playlists){
//     if(playlistId == library.playlists[key1].id){
//       checker2 = true;
//     }
//   }


//   if(checker1 && checker2){
//     library.playlists[playlistId].tracks.push(trackId);
//     console.log(library.playlists);
//   }
//   else{
//     console.log("Sorry, the track or playlist that you have entered does not exist");
//   }
// }

// addTrackToPlaylist('t01','p02');


// generates a unique id
// (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library

// var addTrack = function (name, artist, album) {
//   var unique = uid();
//   library.tracks[unique] = {
//     id: unique,
//     name: name,
//     artist: artist,
//     album: album
//   }
// }

// addTrack('kevindfsf','kevindsfsf','albumsfsf');
// console.log(library);


// adds a playlist to the library

var addPlaylist = function (name) {
  var unique = uid();
  library.playlists[unique] = {
    id: unique,
    name: name,
    tracks: []
  }
}

// addPlaylist('heavy metal');
// console.log(library);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}