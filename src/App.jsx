import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Explore} from './pages/Explore';

function App() {
  return (
    <Routes>
      <Route path="/explore" element={<Explore />}>
      </Route>
    </Routes>
  );
};

export default App;
