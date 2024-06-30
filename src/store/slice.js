import { addListener, createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    todos: [],
    isLoading: false,
    error: null
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
    }
});

export const {setUsers, setIsLoading} = userSlice.actions;
export default userSlice.reducers;
