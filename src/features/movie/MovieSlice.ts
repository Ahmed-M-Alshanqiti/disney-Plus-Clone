import { createSlice } from "@reduxjs/toolkit";

export interface MovieState {
    recommend: any[];
    newDisney: any[];
    originals: any[];
    trending: any[];
}

const initialState: MovieState = {
    recommend: [],
    newDisney: [],
    originals: [],
    trending: [],
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.originals = action.payload.originals;
            state.trending = action.payload.trending;
        },
    },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state: { movie: MovieState }) => state.movie.recommend;
export const selectNewDisney = (state: { movie: MovieState }) => state.movie.newDisney;
export const selectOriginals = (state: { movie: MovieState }) => state.movie.originals; // Fixed typo
export const selectTrending = (state: { movie: MovieState }) => state.movie.trending;

export default movieSlice.reducer;