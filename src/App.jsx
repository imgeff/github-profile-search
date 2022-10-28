import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Explore} from './pages/Explore';
import {Profile} from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="explore" element={<Explore />} />
        <Route path="profile/:user" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
