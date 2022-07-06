import React from "react";

function CreateBio({bandData}){
    return(
        <>
            <img id='logo' src={bandData[0].logo} alt='logo'/>
            <h1>{bandData[0].bandName}</h1>
        </>
    );
};

export default CreateBio;