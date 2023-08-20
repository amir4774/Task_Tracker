import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './TasksSlice';
import CompletedReducer from './CompletedSlice';
import ChangeReducer from './ChangeSlice';

const Store = configureStore({
    reducer: {
        task: TaskReducer,
        complete: CompletedReducer,
        eye: ChangeReducer
    }
})

export default Store;