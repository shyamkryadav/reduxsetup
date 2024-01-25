import { configureStore } from '@reduxjs/toolkit';
import countReducer  from './reducerSllice/countSlice';
export default configureStore({
  reducer: {
    count:countReducer
  },
});