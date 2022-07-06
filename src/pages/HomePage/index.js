import React from 'react';
import { CreateAlbum } from '../../components';


const HomePage = ({albumInstances}) => {

    return(
        <>
            <h1>Home page</h1>
            <div id='album-list'>
                <CreateAlbum albumInstances={albumInstances}/> 
                {/* <CreateAlbum setApiResponseArr={setApiResponseArr} apiResponseArr={apiResponseArr}/> */}
            </div>
        </>
    )
}

export default HomePage;