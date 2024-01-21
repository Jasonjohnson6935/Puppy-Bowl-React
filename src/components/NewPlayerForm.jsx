// NewPlayerForm.jsx
import React, { useState } from 'react';

const NewPlayerForm = ({ onCreatePlayer }) => {
  const [playerName, setPlayerName] = useState('');
  const [breedName, setBreedName] = useState('');
  const [statusName, setStatusName] = useState('');

  const handleCreatePlayer = () => {
    // Perform any validation if needed

    // Create a new player object
    const newPlayer = {
      name: playerName,
      breed: breedName,
      status: statusName,
    };

    // Call the parent component's function to handle player creation
    onCreatePlayer(newPlayer);

    // Clear the form fields
    setPlayerName('');
    setBreedName('');
    setStatusName('');
  };

  return (
    <div>
      <h1>New Player Form</h1>
      <form>
        <label>
          Player Name:
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Breed Name:
          <input
            type="text"
            value={breedName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Status Name:
          <input
            type="text"
            value={statusName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleCreatePlayer}>
          Create Player
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
