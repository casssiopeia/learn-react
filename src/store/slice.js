import { createSlice } from "@reduxjs/toolkit";
import {getUsers, getTodos, postTodo, toggleTodo, deleteTodo } from './async-action';

const initialState = {
    users: [],
    todos: [],
    isLoading: false,
    error: null,
    hren: null
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
        builder.addCase(postTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        });
        builder.addCase(postTodo.rejected, (state, action) => {
            state.error = action.payload;
        });
        builder.addCase(toggleTodo.fulfilled, (state, action) => {
            const updatedTodo = action.payload;
            state.todos = state.todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo);
        });
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            const todoId = action.payload;

            state.todos = state.todos.filter(({id}) => id !== todoId);
        });
    }
});

export const {setUsers, setIsLoading} = userSlice.actions;
export default userSlice.reducer;
