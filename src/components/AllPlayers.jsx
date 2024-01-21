// AllPlayers.jsx
import React, { useState, useEffect } from 'react';
import { useFetchPlayersQuery } from '../API';
import { Link } from 'react-router-dom';
import '../index.css';

const AllPlayers = () => {
  const [thePlayers, setThePlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const { data: players, error, isLoading } = useFetchPlayersQuery();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (error) {
      console.error('Error loading players:', error);
    } else if (players) {
      setThePlayers(players.data.players);
    }
  }, [players, error]);

  useEffect(() => {
    // Filter players based on the search query
    const filtered = thePlayers.filter((player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [searchQuery, thePlayers]);

  const handleDeletePlayer = (playerId) => {
    console.log('Deleting player with ID:', playerId);
    setThePlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== playerId));
  };

  return (
    <div>
      <h1 className="intro">All Players</h1>
      {error && <p>Error loading players: {error.message}</p>}
      <div>
        <input
          type="text"
          placeholder="Search players by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="players">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="player-card">
            <img src={player.imageUrl} alt={player.name} className="player-image" />
            <h4>{player.name}</h4>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <Link to={`/players/${player.id}`}>
              <button className="details-button">Details</button>
            </Link>
            <button onClick={() => handleDeletePlayer(player.id)}>Delete Player</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;

