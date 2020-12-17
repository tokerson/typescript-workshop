import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { loadedPodcasts, searchPodcasts } from './itunesSlice';
import * as yup from 'yup';

const podcastSchema = yup
  .object({
    trackId: yup.string().defined(),
    artistName: yup.string().defined(),
    trackName: yup.string().defined(),
    trackViewUrl: yup.string().defined(),
    artworkUrl60: yup.string().defined(),
  })
  .defined();

export type Podcast = yup.InferType<typeof podcastSchema>;

async function fetchPodcasts(searchTerm: string) {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      searchTerm
    )}&entity=podcast`
  );
  const data = await response.json();

  const responseSchema = yup.object({
    resultCount: yup.number().defined(),
    results: yup.array(podcastSchema).defined(),
  });

  const { results } = await responseSchema.validate(data);

  return results;
}

function* onSearchPodcasts({
  payload: { searchTerm },
}: PayloadAction<{ searchTerm: string }>) {
  const podcasts = yield fetchPodcasts(searchTerm);
  yield put(loadedPodcasts(podcasts));
}

export function* itunesSaga() {
  yield takeLatest(searchPodcasts.type, onSearchPodcasts);
}
