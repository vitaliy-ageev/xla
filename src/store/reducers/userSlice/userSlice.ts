import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface userState {
    isAdmin: boolean,
    isUser: boolean,
    user_id: number | null,
    access_token: string | null,
    refresh_token: string | null,
    role: string | null
}

const initialState: userState = {
    isAdmin: false,
    isUser: false,
    user_id: null,
    access_token: null,
    refresh_token: null,
    role: null
}

interface IUserData {
    user_id: number,
    access_token: string,
    refresh_token: string,
    expires_in: number
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<string>) => {
            if (action.payload === 'admin') {
                state.isAdmin = true;
                state.isUser = false;
                state.role = 'admin'
            } else if (action.payload === 'user') {
                state.isUser = true;
                state.isAdmin = false;
                state.role = 'user'
            } else if (action.payload === 'clear') {
                state.isUser = false;
                state.isAdmin = false;
                state.role = null
            }
        },
        setAuth: (state, action: PayloadAction<IUserData>) => {
            state.user_id = action.payload.user_id
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            localStorage.setItem(
                "user",
                JSON.stringify({
                    user: action.payload.user_id,
                    token_a: action.payload.access_token,
                    token_r: action.payload.refresh_token,
                    role: state.role
                })
            )
        },
        setLogOut: (state) => {
            state.user_id = null
            state.access_token = null
            state.refresh_token = null
            state.isUser = false;
            state.isAdmin = false;
            state.role = null
            localStorage.removeItem("user")
        }
    }
})

export const { setAuth, setLogOut, setRole } = userSlice.actions
export const selectCurrentUser = (state: any) => state.userSlice.user_id
export const selectCurrentToken = (state: any) => state.userSlice.access_token

export default userSlice.reducer