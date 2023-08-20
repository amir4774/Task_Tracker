import { createSlice } from "@reduxjs/toolkit";

const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

const TaskSlice = createSlice({
    name: 'task',

    initialState: {
        tasks: tasks
    },

    reducers: {
        addTask: (state, action) => {
            const { id, text } = action.payload;
            state.tasks = state.tasks.map(task => task.id === id ? { ...task, body: text } : task);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        addCheck: (state, action) => {
            const { id, newCheck } = action.payload;
            state.tasks = state.tasks.map(task => task.id === id ? { ...task, checked: newCheck } : task);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        showTask: (state, action) => {
            state.tasks.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }

    }
});

export const { addTask, addCheck, showTask, deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;