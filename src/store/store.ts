import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminAPI } from "../services/admin/AdminService";
import { jobTypeAPI } from "../services/JobTypeService";
import { opportunityAPI } from "../services/OpportunityService";
import { projectAPI } from "../services/ProjectService";
import { statusAPI } from "../services/StatusService";
import { workingModeAPI } from "../services/WorkingModeService";
import reducers from "./reducers/reducers";

const rootReducer = combineReducers(reducers)

export const setupStore =  configureStore({
        reducer: reducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
            projectAPI.middleware,
            opportunityAPI.middleware,
            statusAPI.middleware,
            jobTypeAPI.middleware,
            workingModeAPI.middleware,
            adminAPI.middleware,
        ])
    })

export type RootState = ReturnType<typeof rootReducer.getState>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']