import React, {useEffect} from 'react';
import RequestData from "../RequestData";
import CreateSongList from "../CreateSongList";

//generate sections containing elements for album data
// function CreateAlbum({setApiResponseArr, apiResponseArr}){

//     useEffect(() => {
//         <RequestData setApiResponseArr={setApiResponseArr}/>
//         console.log(apiResponseArr);
//     }, []);


// };

function CreateAlbum({albumInstances}){
    let instances = [];

    albumInstances.forEach(album => {
        //store each album instance
        instances.push(
            <section className='album'>
                <div>
                <span>
                    <h2 className='album_title'>{album.album}</h2>
                    <img className='album_cover' src={album.albumCover} alt={`${album.name} album cover`}/>
                </span>
                <ul className='album_song_list'>
                    <h2 key={0}>Song List</h2>
                    {/* create song list from album */}
                    <CreateSongList album={album}/>
                </ul>
                </div>
            </section>
        );
    });

    return instances;
};

export default CreateAlbum;