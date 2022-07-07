import React from "react";

function CreateSongList({track}){
    let songs = [];

    //iterate through each album song list and create a list item element displaying the data of the song
    let counter = 0;
    track.forEach(song => {
        songs.push(
            <li className='album_song' key={counter}> # {song.name} - {durationConvert(song.duration)}</li>
        );
        counter++;
    });

    function durationConvert(num)
    { 
        const result = new Date(num * 1000).toISOString().slice(14, 19);
        return result
    }

    return songs;
}

export default CreateSongList;