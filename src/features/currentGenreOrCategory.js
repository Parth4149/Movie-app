import { createSlice } from '@reduxjs/toolkit';
// https://redux-toolkit.js.org/tutorials/quick-start#full-counter-app-example , https://redux-toolkit.js.org/usage/usage-with-typescript#createslice

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // console.log(action.payload);
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      console.log('Here, ', action.payload);
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
