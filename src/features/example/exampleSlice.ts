import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './stateAndTypes';

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    incrementByAmountStart: (state, _action: PayloadAction<number>) => {
      state.loading = true;
      state.error = null;
    },
    incrementByAmountSuccess: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.loading = false;
    },
    incrementByAmountFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { incrementByAmountStart, incrementByAmountSuccess, incrementByAmountFailure } = exampleSlice.actions;

export default exampleSlice.reducer;
