import {useContext, useEffect} from 'react';
import { AlbumContext } from '../../AlbumContext';

//Test url
//http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=899b705b0f0f7af07b0b21d62d724af6&artist=Fit+For+Rivals&album=Wake+the+Dead&format=json

const api_key = '899b705b0f0f7af07b0b21d62d724af6';
const artist = 'Fit+For+Rivals';

function FetchApiData(){
    const [trackData, setTrackData] = useContext(AlbumContext);
    let albumsData = [];
    let finalResponse = false;

    // Freak Machine
    const fetchAlbumData1 = async () => {
        const album = 'Freak+Machine';
        const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${api_key}&artist=${artist}&album=${album}&format=json`;

        try{
            const response = await fetch(url, {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if(response.ok){
                let data = [];
                data = await response.json();
                albumsData.push(data.album);
            }

        }catch (err){
            console.warn(err);
        }

        fetchAlbumData2();
    }

    // Steady Damage
    const fetchAlbumData2 = async () => {
        const album = 'Steady+Damage';
        const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${api_key}&artist=${artist}&album=${album}&format=json`;
    
        try{
            const response = await fetch(url, {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if(response.ok){
                let data = [];
                data = await response.json();
                albumsData.push(data.album);
            }

        }catch (err){
            console.warn(err);
        }
        fetchAlbumData3();
    }

    // Sugar
    const fetchAlbumData3 = async () => {
        const album = 'Sugar';
        const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${api_key}&artist=${artist}&album=${album}&format=json`;

        try{
            const response = await fetch(url, {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if(response.ok){
                let data = [];
                data = await response.json();
                albumsData.push(data.album);
                fetchAlbumData4();
            }

        }catch (err){
            console.warn(err);
        }
    }

    // Wake The Dead 
    const fetchAlbumData4 = async () => {
        const album = 'Wake+the+Dead';
        const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${api_key}&artist=${artist}&album=${album}&format=json`;

        try{
            const response = await fetch(url, {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if(response.ok){
                let data = [];
                data = await response.json();
                albumsData.push(data.album);
                finalResponse = true;
            }

        }catch (err){
            console.warn(err);
        }

        //when last fetch has happened set track data to equal the results of the api
        if(finalResponse){
            await setTrackData(albumsData);
        }
    }

    //prevent api for continuously updating array
    useEffect(()=> {
        fetchAlbumData1();
    }, []);

    return;
}

export default FetchApiData;