import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://portfolio-backend-ef0r.onrender.com/projects/';

export const getProject = createAsyncThunk('projects/getProject', async () => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data; // ✅ return the actual data
  } catch (error) {
    console.log("This is the project get error", error);
    throw error; // ✅ this will trigger the rejected case
  }
});
export const createProject = createAsyncThunk('projects/createProject', async (data) => {
  axios.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  .then(res => console.log('Success:', res.data))
  .catch(err => console.log('Error:', err));
});

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    project: [],
    loading: false,
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(getProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
