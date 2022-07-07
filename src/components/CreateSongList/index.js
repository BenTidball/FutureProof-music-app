import React from "react";

function CreateSongList({track}){
    let tracks = [];
    let counter = 0;

    //album contains single track
    if(track.name){
        tracks.push(
            <li className='album_song' key={counter}> # {track.name} - {durationConvert(track.duration)}</li>
        );
    }else{
        //iterate through each album track and create a list item element displaying the data of the track
        track.forEach(song => {
            tracks.push(
                <li className='album_song' key={counter}> # {song.name} - {durationConvert(song.duration)}</li>
            );
            counter++;
        });
    }

    function durationConvert(num)
    { 
        const result = new Date(num * 1000).toISOString().slice(14, 19);
        return result
    }

    return tracks;
}

export default CreateSongList;