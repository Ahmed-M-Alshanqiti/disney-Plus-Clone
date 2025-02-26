import { createSlice } from "@reduxjs/toolkit";
import { UserState } from './userTypes';
import { RootState } from '../../app/store'


// interface UserState {
//     name: string | null;
//     email: string | null;
//     photo: string | null;
//   }


const initialState: UserState = {
    name: "",
    email: "",
    photo: "",
  };
   
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserLoginDetails: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.photo = action.payload.photo;
      },
      setSignOutState: (state) => {
        state.name = null;
        state.email = null;
        state.photo = null;
      },
    },
  });

  export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

  export const selectUserName = (state: RootState) => state.user.name;
  export const selectUserEmail = (state: RootState) => state.user.email;
  export const selectUserPhoto = (state: RootState) => state.user.photo;
  
  export default userSlice.reducer;

  