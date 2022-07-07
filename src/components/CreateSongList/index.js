import React from "react";

function CreateSongList({track}){
    let songs = [];

    //iterate through each album song list and create a list item element displaying the data of the song
    track.forEach(song => {
        songs.push(
            <li className='album_song' key={Math.random() * 1000}>{song.name}</li>
        );
    });

    return songs;
}

export default CreateSongList;