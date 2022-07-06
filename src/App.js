import React, {useState}  from 'react';
import {Route, Routes} from "react-router-dom";
import {CreateBio } from './components';
import {HomePage, AboutPage} from './pages';
import { default as Layout } from './Layouts';
import './App.css';

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

function App() {
  const [albumInstances, setAlbumInstances] = useState(dummyApiData[0]);
  const [bandData, setBandData] = useState(dummyApiData[1]);
  const [apiResponseArr, setApiResponseArr] = useState([]);

  return (
    <>
      <header id='title'>
        <CreateBio bandData={bandData}/>
        <Layout/>
      </header>
      <main>
        <Routes>
            <Route path='/' >
              <Route path='/' element={<HomePage albumInstances={albumInstances}/>}/>
              <Route path='about' element={<AboutPage/>}/>
            </Route>
          </Routes>
      </main>
    </>
  );
};

export default App;
