
export const initialState: ExampleState = {
  value: 0,
  loading: false,
  error: undefined
};

export interface ExampleState {
  value: number;
  loading: boolean;
  error: unknown;
}