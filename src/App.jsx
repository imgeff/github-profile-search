import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Navigation} from './components/Navigation';
import {Explore} from './pages/Explore';
import {Favorites} from './pages/Favorites';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Repos} from './pages/Repos';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile/:user" element={<Profile />} />
        <Route path="profile/:user/repos" element={<Repos />} />
      </Routes>
    </>
  );
};

export default App;
