// API/index.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const puppyBowlApi = createApi({
  reducerPath: 'puppyBowlApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web-jason/',
  }),
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => 'players',
    }),
    fetchPlayerDetails: builder.query({
      query: (playerId) => `players/${playerId}`,
    }),
  }),
});

export const { useFetchPlayersQuery, useFetchPlayerDetailsQuery } = puppyBowlApi;

