import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Explore} from './pages/Explore';
import {Profile} from './pages/Profile';
import {Repos} from './pages/Repos';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="explore" element={<Explore />} />
        <Route path="profile/:user" element={<Profile />} />
        <Route path="profile/:user/repos" element={<Repos />} />
      </Route>
    </Routes>
  );
};

export default App;
