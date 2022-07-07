import React, {useContext} from 'react';
import { AlbumContext } from '../../AlbumContext';
import CreateSongList from "../CreateSongList";

function CreateAlbum(){
    const [trackData, setTrackData] = useContext(AlbumContext);
    let instances = [];

    if(trackData){
        // console.warn(trackData);

        trackData.forEach(album => {
            //Each album
            instances.push(
                <section className='album'>
                    <div>
                        <span>
                            <h2 className='album_title'>{album.name}</h2>
                            <img className='album_cover' src={album.image[2]["#text"]} alt={`${album.name} album cover`}/>
                        </span>
                        <ul className='album_song_list'>
                            <h2>Song List</h2>
                            {/* create song list from album */}
                            <CreateSongList track={album.tracks.track}/> 
                        </ul>
                    </div>
                </section>
            )
        });

    };
    return instances;
};

export default CreateAlbum;