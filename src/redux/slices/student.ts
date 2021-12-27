import { createSlice } from '@reduxjs/toolkit';
import { store } from 'redux/store';
import axios from '../../utils/axios';

const initialState: any = {
  isLoading: false,
  students: [],
  error: false,
  errorMess: { useName: '', password: '' }
};

const silce = createSlice({
  name: 'student',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    addNewStudent(state, action) {
      const students = [...state.students, action.payload];
      state.students = students;
      state.isLoading = false;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    updateErrMees(state, action) {
      state.errorMess = action.payload;
    }
  }
});

export default silce.reducer;

export const doGetNewStudent = (data: any) => {
  return async () => {
    const { dispatch } = store;
    dispatch(silce.actions.startLoading());
    try {
      const respone: any = axios.get('');
      const { data } = respone;
      if (data) dispatch(silce.actions.addNewStudent(data));
    } catch (error) {
      dispatch(silce.actions.hasError(true));
    }
  };
};
