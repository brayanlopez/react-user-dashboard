import { configureStore } from "@reduxjs/toolkit";
import user from "../redux-slices/users";

const store = configureStore({
  // reducer: reducerUser,
  reducer: {
    users: user,
  },
});

export default store;
