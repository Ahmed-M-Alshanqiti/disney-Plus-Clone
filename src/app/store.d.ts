export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    user: import("../features/User/userTypes").UserState;
    movie: import("../features/movie/MovieSlice").MovieState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        user: import("../features/User/userTypes").UserState;
        movie: import("../features/movie/MovieSlice").MovieState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export default store;
