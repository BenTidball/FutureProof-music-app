import React  from 'react';
import {Route, Routes} from "react-router-dom";
import {CreateBio} from './components';
import {HomePage, AboutPage} from './pages';
import { AlbumProvider } from './AlbumContext';
import { default as Layout } from './Layouts';
import './App.css';

function App() {
  return (
    <>
      <header id='title'>
        <CreateBio/>
        <Layout/>
      </header>
      <main>
        <AlbumProvider>
          <Routes>
              <Route path='/' >
                <Route path='/' element={<HomePage/>}/>
                <Route path='about' element={<AboutPage/>}/>
              </Route>
          </Routes>
        </AlbumProvider>
      </main>
    </>
  );
};

export default App;
