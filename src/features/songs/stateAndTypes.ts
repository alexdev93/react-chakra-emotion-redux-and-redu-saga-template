

export interface Track {
  id: string;
  name: string;
  preview_url: string;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  artists: Array<{ name: string }>;
}

export interface Item {
  track: Track;
}

export interface State {
  tracks: Track[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  tracks: [],
  loading: false,
  error: null,
}