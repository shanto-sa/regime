import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Simulate an API call
const simulateApiCall = async (messageData) => {
  return {
    data: {
      message: 'Contact message sent successfully',
    },
  };
};


export const sendContactUsMessage = createAsyncThunk(
  'auth/sendContactUsMessage',
  async (messageData, { rejectWithValue }) => {
    try {
      // Simulate API call
      const response = await simulateApiCall(messageData);
      console.log(response.data); // Log the response data to the console
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContactUsMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendContactUsMessage.fulfilled, (state, action) => {
        state.loading = false;
        // You can add any additional state changes here if needed
      })
      .addCase(sendContactUsMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default contactSlice.reducer;