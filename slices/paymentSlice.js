import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call
const simulateApiCall = async (paymentData) => {
  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    data: {
      message: 'Payment submitted successfully',
      paymentDetails: paymentData
    },
  };
};

export const submitPayment = createAsyncThunk(
  'payment/submitPayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      // Simulate API call
      const response = await simulateApiCall(paymentData);
      console.log('API Response:', response.data); // Log the response data to the console
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: null,
    submittedPayment: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.submittedPayment = action.payload.paymentDetails;
        console.log('Payment submitted successfully:', action.payload.paymentDetails);
      })
      .addCase(submitPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.error('Payment submission failed:', action.payload.error);
      });
  },
});

export default paymentSlice.reducer;