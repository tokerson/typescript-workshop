import { StoreState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Podcast } from './itunesSaga';

export type ITunesState = {
  podcasts: Podcast[];
};

const itunesSlice = createSlice({
  name: 'itunes',
  initialState: {
    podcasts: [],
  } as ITunesState,
  reducers: {
    searchPodcasts(state, action: PayloadAction<{ searchTerm: string }>) {
      // side effects
    },
    loadedPodcasts(state, action: PayloadAction<Podcast[]>) {
      state.podcasts = action.payload;
    },
  },
});

export const { searchPodcasts, loadedPodcasts } = itunesSlice.actions;

export const selectPodcasts = (state: StoreState) => state.itunes.podcasts;

export const itunesReducer = itunesSlice.reducer;
