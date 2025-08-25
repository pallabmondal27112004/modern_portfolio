import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://portfolio-backend-ef0r.onrender.com/user/';

export const getuser = createAsyncThunk('user/getuser', async () => {
  try {
    const response = await axios.get(url);
    console.log(response, "tiajsdjbf user ");
    return response.data; // ✅ return the actual data
  } catch (error) {
    console.log("This is the project get error", error);
    throw error; // ✅ this will trigger the rejected case
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
