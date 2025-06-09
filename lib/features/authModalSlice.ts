import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthModalState {
    isOpened: boolean,
    type: 'login' | 'register' | 'forgotPassword' | null
}

const initialState: AuthModalState = {
    isOpened: false,
    type: null
}

export const authModalSlice = createSlice({
    name: 'authModal',
    initialState,
    reducers: {
        openAuthModal: (state) => {
            state.isOpened = true
        },
        closeAuthModal: (state) => {
            state.isOpened = false
        },
        setAuthModalType: (state, action: PayloadAction<AuthModalState['type']>) => {
            state.type = action.payload
        }
    }
})

