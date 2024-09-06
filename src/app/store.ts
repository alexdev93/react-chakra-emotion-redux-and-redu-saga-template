import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import exampleReducer from "../features/example/exampleSlice";
import songReducer from "../features/songs/songSlice";
import exampleSaga from "../features/example/exampleSaga";
import songSaga from "../features/songs/songSaga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([exampleSaga(), songSaga()]);
}

const store = configureStore({
  reducer: {
    example: exampleReducer,
    songs: songReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
