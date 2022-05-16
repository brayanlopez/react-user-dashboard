import { createSlice } from "@reduxjs/toolkit";
import { api } from "../config/api";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userslist: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.userslist = action.payload;
    },
  },
});

export const getUsersAsync = () => async (dispatch) => {
  try {
    const { data } = await api.get("/users");
    dispatch(getUsers(data));
  } catch (error) {
    throw new Error(error);
  }
};

// Action creators are generated for each case reducer function
export const { getUsers } = userSlice.actions;
export const showUsers = (state) => state.users.userslist;
export default userSlice.reducer;
