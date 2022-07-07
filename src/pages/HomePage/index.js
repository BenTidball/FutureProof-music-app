import React from 'react';
import { CreateAlbum, FetchApiData } from '../../components';

const HomePage = () => {

    return(   
        <>
            <FetchApiData/>
            <h1>Albums</h1>
            <div id='album-list'>
                <CreateAlbum/>
            </div>
        </>
    );

}

export default HomePage;