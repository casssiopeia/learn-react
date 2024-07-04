import { addListener, createSlice } from "@reduxjs/toolkit";
import {getUsers, getTodos} from './async-action';

const initialState = {
    users: [],
    todos: [],
    isLoading: false,
    error: null,
};


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers (state, action) {
            state.users = action.payload;
        },
        setIsLoading (state, action) {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getTodos.rejected, (state, action) => {
            state.todos = action.payload;
            state.isLoading = false;
        });
    }
});

export const {setUsers, setIsLoading} = userSlice.actions;
export default userSlice.reducer;
