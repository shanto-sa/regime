// addressSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call
const simulateApiCall = async (addressData) => {
  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    data: {
      message: 'Address added successfully',
      addressDetails: addressData
    },
  };
};

export const addAddress = createAsyncThunk(
  'address/addAddress',
  async (addressData, { rejectWithValue }) => {
    try {
      // Simulate API call
      const response = await simulateApiCall(addressData);
      console.log('API Response:', response.data); // Log the response data to the console
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    loading: false,
    error: null,
    addresses: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload.addressDetails);
        console.log('Address added successfully:', action.payload.addressDetails);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.error('Address addition failed:', action.payload.error);
      });
  },
});

export default addressSlice.reducer;