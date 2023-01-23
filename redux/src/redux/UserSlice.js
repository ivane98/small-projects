import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk("user/update", async (user) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    user
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "jane",
      email: "jane@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser.pending]: (state) => {
      state.pending = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [updateUser.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export const { updateSuccess, updatePending, updateError } = userSlice.actions;
export default userSlice.reducer;
