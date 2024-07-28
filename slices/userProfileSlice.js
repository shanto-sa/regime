// userProfileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call
const simulateApiCall = async (profileData) => {
  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    data: {
      message: 'Profile updated successfully',
      profileDetails: profileData
    },
  };
};

export const updateUserProfile = createAsyncThunk(
  'userProfile/updateUserProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      // Simulate API call
      const response = await simulateApiCall(profileData);
      console.log('API Response:', response.data); // Log the response data to the console
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    loading: false,
    error: null,
    profileData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload.profileDetails;
        console.log('Profile updated successfully:', action.payload.profileDetails);
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.error('Profile update failed:', action.payload.error);
      });
  },
});

export default userProfileSlice.reducer;