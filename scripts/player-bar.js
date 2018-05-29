{
    $('button#play-pause').on('click', function() {
        player.playPause();
        $(this).attr('playState', player.playState);
    });
    
    $('button#next').on('click', function() {
        if (player.playState !== 'playing') { return; }
        
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) { return; }
        
        const nextSong = album.songs[nextSongIndex];
        player.playPause(nextSong); 
    });
    
$('button#previous').on('click', function() { 
    console.log("clicked");
if (player.playState !== 'playing') { return; } 
    console.log("clicked");
    
const currentSongIndex = album.songs.indexOf(player.soundObject); 
const previousSongIndex = previousSongIndex + 0; 
if (previousSongIndex >= album.songs.length) { return; } 
    

const nextSong = album.songs[previousSongIndex]; 
player.playPause(previousSong); 
    console.log("clicked");
    
}); 
}
