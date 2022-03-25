import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/counterSlice";
import submitForm from "./reducer/submitForm";
// import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userForm: submitForm,
  },
});
