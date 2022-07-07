import React, { useState, createContext } from 'react';

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {  
  const [trackData, setTrackData] = useState(null);

  return (
    <AlbumContext.Provider value={[trackData, setTrackData]}>
          {props.children}
    </AlbumContext.Provider>
  );
};