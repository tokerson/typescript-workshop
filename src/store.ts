import { itunesReducer } from './iTunes/itunesSlice';
import { counterReducer } from './counter/counterSlice';
import { configureStore, Store } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { counterSaga } from './counter/counterSaga';
import { all } from 'redux-saga/effects';
import { itunesSaga } from './iTunes/itunesSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    itunes: itunesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(function* () {
  yield all([counterSaga(), itunesSaga()]);
});

type GetStoreState<S> = S extends Store<infer State, any> ? State : unknown;

export type StoreState = GetStoreState<typeof store>;
