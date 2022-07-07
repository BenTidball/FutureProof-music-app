import React from "react";
import { AlbumContext } from "../../AlbumContext";
import logo from '../../img/logo.png'

function CreateBio(){
    return(
        <>
            <img id='logo' src={logo} alt='logo'/>
            <h1>Fit For Rivals</h1>
        </>
    );
};

export default CreateBio;