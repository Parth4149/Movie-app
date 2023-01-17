import { createSlice } from '@reduxjs/toolkit';
// https://redux-toolkit.js.org/tutorials/quick-start#full-counter-app-example , https://redux-toolkit.js.org/usage/usage-with-typescript#createslice 

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // console.log(action.payload);
      state.genreOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
