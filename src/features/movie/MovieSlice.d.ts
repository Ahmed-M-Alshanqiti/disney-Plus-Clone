export interface MovieState {
    recommend: any[];
    newDisney: any[];
    originals: any[];
    trending: any[];
}
export declare const setMovies: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "movie/setMovies">;
export declare const selectRecommend: (state: {
    movie: MovieState;
}) => any[];
export declare const selectNewDisney: (state: {
    movie: MovieState;
}) => any[];
export declare const selectOriginals: (state: {
    movie: MovieState;
}) => any[];
export declare const selectTrending: (state: {
    movie: MovieState;
}) => any[];
declare const _default: import("redux").Reducer<MovieState>;
export default _default;
