import React from "react";

function CreateSongList({album}){
    let songs = [];

    //iterate through each album song list and create a list item element displaying the data of the song
    album.songs.forEach(song => {
        songs.push(
            <li className='album_song' key={Math.random() * 1000}>{song}</li>
        );
    });

    return songs;
}

export default CreateSongList;