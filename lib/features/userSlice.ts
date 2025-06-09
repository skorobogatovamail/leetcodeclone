import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: {
        id?: string;
        email?: string;
        name?: string;
    } | null,
    isAuthenticated: boolean;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState['user']>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

