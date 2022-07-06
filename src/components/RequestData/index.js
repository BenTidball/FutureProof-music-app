import React, {useEffect} from 'react';

async function RequestData({setApiResponseArr}){
    //https://developer.spotify.com/console/get-artist-albums/
    const authToken = 'BQBKjIaah8ykFEt13IPFHJ5gLM8bJXtHEyYnCCntq0pCtyJ-64UrkEX2vjPd3nrTdCN_jHCUI833MzzcO9wHK6RZil_iSjoeNShruWudsc1SUdAxRrGQZn4GEuTqxlZ4GX9ji8YoJjLcuF51LgIOtbUosYViKV95vPUhMpMZawrT'

    const artistID = '2AuJkUSFBFWiOYksacuUlV'
    const url = `https://api.spotify.com/v1/artists/${artistID}/albums`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken,
            }
        })

        if(response.ok){
            const data = await response.json();
            console.log(data.items[0]);
            setApiResponseArr(data.items[0]);
        }
    }catch (err){
        console.warn(err);
    }
    
}

    //https://developer.spotify.com/console/get-album-tracks/
    // async function fetchAlbumData(){
    //     const authToken = 'BQCurmIppszXLO93vEnsNMWpkdFUgujOZS4d0eoChPhq5pL7yPLS69L4fm5h30SQPTf9PGnTmQUOWamk1NYfRXLBlZQoHLImo0AgvZo3SPbkynGGBN4M7yIe4slmZtOH86_227hSrYqucLAnYrvRYXwqGxT5XsLbiIT0NNe-_NIu'
    
    //     const albumID = '1bejHxvWwF6UY4LCA4racI'
    //     const url = `https://api.spotify.com/v1/albums/${albumID}/tracks`;
    
    //     try {
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         cache: 'no-cache',
    //         headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + authToken,
    //         }
    //     })
    
    //     const data = await response.json();
    //     console.log(data);
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // }


export default RequestData;