import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import exampleReducer from "../features/example/exampleSlice";
import exampleSaga from "../features/example/exampleSaga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([exampleSaga()]);
}

const store = configureStore({
  reducer: {
    example: exampleReducer,
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
