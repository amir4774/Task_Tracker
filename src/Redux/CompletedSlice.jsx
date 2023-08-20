import { createSlice } from "@reduxjs/toolkit";

const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const tasksChecked = tasks.filter(task => task.checked);

const CompletedSlice = createSlice({
    name: 'complete',

    initialState: {
        completed: tasksChecked
    },

    reducers: {
        addCheckCompleted: (state, action) => {
            state.completed.push(action.payload);
        },

        removeCheck: (state, action) => {
            state.completed = state.completed.filter(comp => comp.id !== action.payload);
        }
    }
});

export const { addCheckCompleted, removeCheck } = CompletedSlice.actions;
export default CompletedSlice.reducer;