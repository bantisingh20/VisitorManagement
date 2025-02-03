// src/redux/VisitorsubmitSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load data from localStorage, or initialize as empty object
const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem('visitorData');
  return savedData ? JSON.parse(savedData) : {};
};

const initialState = loadFromLocalStorage();

const visitorSubmitSlice = createSlice({
  name: 'visitorSubmit',
  initialState,
  reducers: {
    setVisitorData: (state, action) => {
      const updatedState = { ...state, ...action.payload };
      localStorage.setItem('visitorData', JSON.stringify(updatedState)); // Save to localStorage
      return updatedState;
    },
  },
});

export const { setVisitorData } = visitorSubmitSlice.actions;
export default visitorSubmitSlice.reducer;
