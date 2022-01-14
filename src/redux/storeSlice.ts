import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usertype } from "../types";

interface initialStateType {
    user: usertype | null
}

const initialState: initialStateType = {
    user: null
}

export const storeSlice = createSlice({
    name: 'storeUtils',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<usertype>) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null;
        },
        updateUser: (state, action: PayloadAction<usertype>) => {
            state.user = action.payload
        },
    }
})
export const { addUser, removeUser, updateUser } = storeSlice.actions

export default storeSlice.reducer;