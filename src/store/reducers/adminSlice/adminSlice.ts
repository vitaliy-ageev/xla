import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useLogOutAdminMutation } from "../../../services/admin/AuthAdminService"

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

interface IUserData {
    user_id: number,
    access_token: string,
    refresh_token: string,
    expires_in: number
}

export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        setIsAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload
        },
        setAuthAdmin: (state, action: PayloadAction<IUserData>) => {
            state.user_id = action.payload.user_id
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            state.isAdmin = true
            localStorage.setItem(
                "admin",
                JSON.stringify({
                    user_id: action.payload.user_id,
                    access_token: action.payload.access_token,
                    isAdmin: true
                })
            )
        },
        setLogOutAdmin: (state) => {
            state.user_id = null
            state.access_token = null
            state.refresh_token = null
            state.isAdmin = false
            localStorage.removeItem("admin")
        }
    }
})

export const { setAuthAdmin, setLogOutAdmin, setIsAdmin } = adminSlice.actions
export const selectCurrentAdmin = (state: any) => state.adminSlice.user_id
export const selectCurrentToken = (state: any) => state.adminSlice.access_token

export default adminSlice.reducer