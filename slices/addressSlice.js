// addressSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call for adding an address
const simulateAddApiCall = async (addressData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    data: {
      message: 'Address added successfully',
      addressDetails: addressData
    },
  };
};

// Simulate an API call for fetching addresses
const simulateFetchApiCall = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    data: [
      { id: 1, type: 'المنزل', address: 'St, Khorais Bldg 4th floor, Jeddah 23526, Saudi Arabiassss' },
      { id: 2, type: 'العمل', address: 'King Fahd Rd, Riyadh 11564, Saudi Arabiayyy' },
    ]
  };
};

export const addAddress = createAsyncThunk(
  'address/addAddress',
  async (addressData, { rejectWithValue }) => {
    try {
      const response = await simulateAddApiCall(addressData);
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const fetchAddresses = createAsyncThunk(
  'address/fetchAddresses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await simulateFetchApiCall();
      console.log('Fetched Addresses:', response.data);
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
      })
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
        console.log('Addresses fetched successfully:', action.payload);
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.error('Address fetching failed:', action.payload.error);
      });
  },
});

export default addressSlice.reducer;