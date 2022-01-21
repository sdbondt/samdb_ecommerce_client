import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
  isAuthenticated: false,
  token: null,
  user: {}
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setToken(state, action) {
      state.token = action.payload
    },
    setUser(state, action) {
      state.user = action.payload
    }
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer