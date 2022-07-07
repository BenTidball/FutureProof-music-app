import React, { useState, createContext } from 'react';

const dummyApiData = [
    [{
        album: 'Steady Damage',
        albumCover: './img/SteadyDamage_cover.jpg',
        albumData: 2009,
        songs: ['Crash', 'Hallelujah', 'Damage', 'Get with me', 'Better off (Alone)', 'Burn', 'Can\'t Live Without You', 'Girl in a coma', 'Reason', 'Cut off your hands']
      },
      {
        album: 'Sugar',
        albumCover: './img/Sugar_cover.jpg',
        albumData: 2015,
        songs: ['Special Kind Of Crazy', 'Light That Shines', 'Freak Machine', 'Hit Me']
      },
      {
        album: 'Freak Machine',
        albumCover: './img/FreakMachine_cover.jpg',
        albumData: 2016,
        songs: ['Hit Me', 'Light That Shines', 'Gave It Away', 'Special Kind Of Crazy', 'Freak Machine', 'Novocain', 'Gimmie the Pain', 'Agent Orange', 'I AM', 'The Devil(Inside)']
      }
    ],
    [{
      bandName: 'Fit For Rivals', 
      logo: './img/logo.png'
    }]
];


export const AlbumContext = createContext();

export const AlbumProvider = (props) => {  
  const [trackData, setTrackData] = useState(null);

  return (
    <AlbumContext.Provider value={[trackData, setTrackData]}>
          {props.children}
    </AlbumContext.Provider>
  )
}


