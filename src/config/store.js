import { configureStore } from "@reduxjs/toolkit";
import application from "../redux-slices/index";
import user from "../redux-slices/users";

const store = configureStore({
  // reducer: reducerUser,
  reducer: {
    app: application,
    users: user,
  },
});

export default store;
