import { UserState } from './userTypes';
import { RootState } from '../../app/store';
export declare const setUserLoginDetails: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/setUserLoginDetails">, setSignOutState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"user/setSignOutState">;
export declare const selectUserName: (state: RootState) => string | null;
export declare const selectUserEmail: (state: RootState) => string | null;
export declare const selectUserPhoto: (state: RootState) => string | null;
declare const _default: import("redux").Reducer<UserState>;
export default _default;
