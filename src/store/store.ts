import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authAPI } from "../services/auth/authAPI";
import { jobTypeAPI } from "../services/JobTypeService";
import { opportunityAPI } from "../services/OpportunityService";
import { projectAPI } from "../services/ProjectService";
import { statusAPI } from "../services/StatusService";
import { userAPI } from "../services/user/userAPI";
import { workingModeAPI } from "../services/WorkingModeService";
import reducers from "./reducers/reducers";

const rootReducer = combineReducers(reducers)

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
            projectAPI.middleware,
            opportunityAPI.middleware,
            statusAPI.middleware,
            jobTypeAPI.middleware,
            workingModeAPI.middleware,
            authAPI.middleware,
            userAPI.middleware,
        ])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']