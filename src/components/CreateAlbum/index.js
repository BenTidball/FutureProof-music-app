import React, {useContext} from 'react';
import { AlbumContext } from '../../AlbumContext';
import CreateSongList from "../CreateSongList";

function CreateAlbum(){
    const [trackData] = useContext(AlbumContext);
    let instances = [];

    if(trackData){

        let counter = 0;
        trackData.forEach(album => {

            //single track in album
            if(album.tracks.track.name){
                instances.push(
                    <section className='album' key={counter}>
                        <div>
                            <span>
                                <h2 className='album_title'>{album.name}</h2>
                                <button className='album_cover' onClick={() => {window.open(album.url, '_blank')}}>
                                    <img  src={album.image[3]["#text"]} alt={`${album.name} album cover`} data-album-url={album.url}/>
                                </button>
                            </span>
                            <ul className='album_song_list'>
                                <h2>Track List</h2>
                                {/* create song list from album */}
                                <CreateSongList track={album.tracks.track}/>
                            </ul>
                            <em>Listeners: {album.listeners} _ PlayCount: {album.playcount}</em>
                            {album.tags === "" ? null : <em>Tag: {album.tags}</em>}
                        </div>
                    </section>
                )
                counter++;

            }else{
                //Each album
                instances.push(
                    <section className='album' key={counter}>
                        <div>
                            <span>
                                <h2 className='album_title'>{album.name}</h2>
                                <button className='album_cover' onClick={() => {window.open(album.url, '_blank')}}>
                                    <img  src={album.image[3]["#text"]} alt={`${album.name} album cover`} data-album-url={album.url}/>
                                </button>
                            </span>
                            <ul className='album_song_list'>
                                <h2>Track List</h2>
                                {/* create song list from album */}
                                <CreateSongList track={album.tracks.track}/>
                            </ul>
                            <em>Listeners: {album.listeners} _ PlayCount: {album.playcount}</em>
                            <em>Tag: {album.tags.tag[0].name}</em>
                        </div>
                    </section>
                )
                counter++;
            }
        });
    };
    return instances;
};
export default CreateAlbum;