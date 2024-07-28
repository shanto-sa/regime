// fetchDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call for fetching home data
const simulateFetchHomeDataApiCall = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    data: [
        {
          id: 1,
          subscription: {
            package: 'الباقة المتكاملة123',
            startDate: '30/5/2023',
            endDate: '30/6/2023',
          },
          stats: {
            meals: 28,
            rows: 7,
          },
          stats2: {
            meals: 13,
            rows: 4,
          }
        },
      ]
  };
};

export const fetchHomeData = createAsyncThunk(
  'home/fetchHomeData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await simulateFetchHomeDataApiCall();
      console.log('Fetched HomeData:', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const fetchDataSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    error: null,
    HomeData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.HomeData = action.payload;
        console.log('HomeData fetched successfully:', action.payload);
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        console.error('Home Data fetching failed:', action.payload.error);
      });
  },
});

export default fetchDataSlice.reducer;