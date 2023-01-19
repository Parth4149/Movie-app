import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const tmdbApiKey = '452c75a83b35c60555caa1acf0c698ce';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Genres (https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}&language=en-US)
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `/movie/${genreIdOrCategoryName}?&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get movies by genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `/discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}&page=${page}`;
        }
        // Get popular movies
        return `/movie/popular?&page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
// react toolkit query automatically creates a hook for us
