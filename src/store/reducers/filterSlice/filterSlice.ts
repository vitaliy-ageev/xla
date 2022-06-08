import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
    projectId: number | undefined;
}

const initialState: FilterState = {
    projectId: undefined,
}

export const filterSlice = createSlice({
    name: 'FilterSlice',
    initialState,
    reducers: {
        setProjectId(state, action: PayloadAction<any>) {
            state.projectId = action.payload
        }
    }
})

export default filterSlice.reducer;