import { createSlice } from "@reduxjs/toolkit";

const ChangeSlice = createSlice({
    name: 'eye',

    initialState: {
        change: false
    },

    reducers: {
        changeEye: state => {
            state.change = !state.change;
        }
    }
});

export const { changeEye } = ChangeSlice.actions;
export default ChangeSlice.reducer;