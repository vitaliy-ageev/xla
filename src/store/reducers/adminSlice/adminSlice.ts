import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface adminState {
    isAdmin: boolean,
    user_id: number | null,
    access_token: string | null,
    refresh_token: string | null,
}

const initialState: adminState = {
    isAdmin: false,
    user_id: null,
    access_token: null,
    refresh_token: null,
}

export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        setIsAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload
        },
        setAuthAdmin: (state, action: PayloadAction<{ user_id: number, access_token: string }>) => {
            const { user_id, access_token } = action.payload
            state.user_id = user_id
            state.access_token = access_token
            state.isAdmin = true
            localStorage.setItem(
                "user",
                JSON.stringify({
                    user_id: user_id,
                    access_token: access_token,
                    isAdmin: true
                })
            )
        },
        logOutAdmin: (state) => {
            state.user_id = null
            state.access_token = null
           state.isAdmin = false
            localStorage.removeItem("user")
        }
    }
})

export const { setAuthAdmin, logOutAdmin, setIsAdmin } = adminSlice.actions
export const selectCurrentAdmin = (state: any) => state.adminSlice.user_id
export const selectCurrentToken = (state: any) => state.adminSlice.access_token

export default adminSlice.reducer