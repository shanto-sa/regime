import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for submitting vacation data
export const submitVacation = createAsyncThunk(
  'vacation/submitVacation',
  async (vacationData) => {

      // Log the vacation data before the API call
      console.log('Submitting vacation data:', vacationData);

    // Make the API call here
    const response = await fetch('/api/vacation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vacationData),
    });
    return await response.json();
  }
);

const vacationSlice = createSlice({
  name: 'vacation',
  initialState: {
    startDate: '',
    endDate: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitVacation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitVacation.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update state based on the response data
      })
      .addCase(submitVacation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setStartDate, setEndDate } = vacationSlice.actions;
export default vacationSlice;