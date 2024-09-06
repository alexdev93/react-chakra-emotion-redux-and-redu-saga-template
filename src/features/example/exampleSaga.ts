import { call, put, takeLatest } from 'redux-saga/effects';
import { incrementByAmountFailure, incrementByAmountStart, incrementByAmountSuccess } from './exampleSlice';

interface IncrementByAmountAction {
  type: string;
  payload: number;
}

function* incrementAsync(action: IncrementByAmountAction) {
  try {
    const result: number = yield call(() =>
      new Promise<number>((res) => setTimeout(() => res(action.payload), 1000))
    );
    yield put(incrementByAmountSuccess(result));
  } catch (error) {
    yield put(incrementByAmountFailure((error as Error).message));
  }
}

// Root saga
export default function* exampleSaga() {
  yield takeLatest(incrementByAmountStart.type, incrementAsync);
}
