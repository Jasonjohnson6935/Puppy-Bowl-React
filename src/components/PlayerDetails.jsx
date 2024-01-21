// PlayerDetails.jsx
import React from 'react';
import { useFetchPlayerDetailsQuery } from '../API';

const PlayerDetails = ({ playerId }) => {
  const { data: playerDetails, error, isLoading } = useFetchPlayerDetailsQuery(playerId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading player details: {error.message}</p>;
  }

  if (!playerDetails) {
    return <p>No details available for this player.</p>;
  }

  return (
    <div>
      <h1>Player Details</h1>
      <p>Name: {playerDetails.data.player.name}</p>
      <p>Breed: {playerDetails.data.player.breed}</p>
      <p>Status: {playerDetails.data.player.status}</p>
      <p>TeamId: {playerDetails.data.player.team.id}</p>
      <p>TeamName: {playerDetails.data.player.team.name}</p>
    </div>
  );
};

export default PlayerDetails;

