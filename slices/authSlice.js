import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from 'react-native-encrypted-storage';

// Simulated API responses
const simulateApiCall = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data });
    }, delay);
  });
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (phoneNumber, { rejectWithValue }) => {
    try {
      // Check if the phone number is 12345678
      if (phoneNumber) {
        const response = await simulateApiCall({ success: true, message: 'OTP sent successfully' });
        return response.data;
      } else {
        throw new Error('Invalid phone number');
      }
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({ phoneNumber, otp }, { rejectWithValue }) => {
    try {
      // Check if the phone number is 12345678 and OTP is 1234
      if (phoneNumber === phoneNumber && otp === '1234') {
        const response = await simulateApiCall({
          success: true,
          user: { id: 1, phoneNumber: phoneNumber, name: 'Shanto Halder' },
        });
        console.log('response:', response);
        return response.data.user;
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
        state.userData = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem('userData');
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        // You can add any additional state changes here if needed
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userData  = action.payload;
        console.log('action.payload:', action.payload);
        AsyncStorage.setItem('userData', JSON.stringify(action.payload)); 
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});


export const { logout, setUserData  } = authSlice.actions;

// Selector to get user information
export const selectUserData = (state) => state.auth.userData;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;