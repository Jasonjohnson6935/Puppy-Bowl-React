// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import PlayerDetails from './components/PlayerDetails';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
          <Route path="/players/:id/details" element={<PlayerDetails />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

