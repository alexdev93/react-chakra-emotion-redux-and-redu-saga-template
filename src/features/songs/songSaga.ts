import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "./songApi";
import { Track } from "./stateAndTypes";
import {
  fetchSongFailure,
  fetchSongStart,
  fetchSongSuccess,
} from "./songSlice";

function* fetchSongs() {
  try {
    // Call the fetchData function and wait for the response
    const result: Track[] = yield call(fetchData);

    // Dispatch success action with the result
    yield put(fetchSongSuccess(result));
  } catch (error) {
    // Dispatch failure action with the error message
    yield put(fetchSongFailure((error as Error).message));
  }
}

// Root saga
export default function* songSaga() {
  // Listen for the fetchSongStart action and run fetchSongs when it's dispatched
  yield takeLatest(fetchSongStart.type, fetchSongs);
}
