var playlist = {artist: "Song"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}
function removeFromPlaylist(playlist, artistName){
  delete artistName.Slowdive;
}