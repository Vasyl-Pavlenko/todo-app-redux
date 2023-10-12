import { configureStore } from '@reduxjs/toolkit';
import {tasksReducer, filterReducer} from './reducers';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});

export default store;
