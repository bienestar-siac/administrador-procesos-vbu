import { configureStore, createSlice } from "@reduxjs/toolkit";

// Definimos un slice para manejar la sesión
const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    setSession: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
    clearSession: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { setSession, clearSession } = sessionSlice.actions;

const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
});

export default store;
