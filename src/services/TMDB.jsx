import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const tmdbApiKey = '452c75a83b35c60555caa1acf0c698ce';
const page = 1;
// /movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Genres (https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}&language=en-US)
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}&language=en-US`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: () => `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
// react toolkit query automatically creates a hook for us
