import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialMoviesState = {
    recommended: null | Record<string, string>[];
    newArrival: null | Record<string, string>[];
    original: null | Record<string, string>[];
    trending: null | Record<string, string>[];
};

type FinalMoviesState = {
    movie: {
        recommended: Record<string, string>[];
        newArrival: Record<string, string>[];
        original: Record<string, string>[];
        trending: Record<string, string>[];
    };
};

type SelectFunction = (state: FinalMoviesState) => Record<string, string>[];

const initialState: InitialMoviesState = {
    recommended: null,
    newArrival: null,
    original: null,
    trending: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (
            state: InitialMoviesState,
            action: PayloadAction<Record<string, Record<string, string>[]>>
        ) => {
            return {
                ...state,
                recommended: action.payload.recommended,
                newArrival: action.payload.newArrival,
                original: action.payload.original,
                trending: action.payload.trending,
            };
        },
    },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommended: SelectFunction = (state) =>
    state.movie.recommended;

export const selectNewArrival: SelectFunction = (state) =>
    state.movie.newArrival;

export const selectOriginal: SelectFunction = (state) => state.movie.original;

export const selectTrending: SelectFunction = (state) => state.movie.trending;

export default movieSlice.reducer;
