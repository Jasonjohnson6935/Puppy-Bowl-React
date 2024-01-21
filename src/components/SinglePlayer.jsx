// SinglePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useFetchPlayerDetailsQuery } from '../API';
import { useParams } from 'react-router-dom';

const SinglePlayer = ({ onDeletePlayer }) => {
  const { id } = useParams();
  const { data: playerDetails, error, isLoading } = useFetchPlayerDetailsQuery(id);

  useEffect(() => {
 
  }, [id, playerDetails]);

  if (isLoading) {
    return <p>Loading player details...</p>;
  }

  if (error) {
    return <p>Error loading player details: {error.message}</p>;
  }
console.log(playerDetails.data.name)

  const handleDelete = () => {
    onDeletePlayer(id);
  };
  console.log (playerDetails)
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

export default SinglePlayer;




