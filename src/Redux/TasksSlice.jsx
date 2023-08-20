import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: 'task',

    initialState: {
        tasks: []
    },

    reducers: {
        addTask: (state, action) => {
            const { id, text } = action.payload;
            state.tasks = state.tasks.map(task => task.id === id ? { ...task, body: text } : task)
        },

        addCheck: (state, action) => {
            const { id, newCheck } = action.payload;
            state.tasks = state.tasks.map(task => task.id === id ? { ...task, checked: newCheck } : task);
        },

        showTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }

    }
});

export const { addTask, addCheck, showTask, deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;