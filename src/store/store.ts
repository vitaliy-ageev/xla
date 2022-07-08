import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryAPI } from "../services/categoryService";
import { forumAPI } from "../services/forumService";
import { jobTypeAPI } from "../services/jobTypeService";
import { opportunityAPI } from "../services/opportunityService";
import { projectAPI } from "../services/projectService";
import { statusAPI } from "../services/statusService";
import { tagAPI } from "../services/tagsService";
import { workingModeAPI } from "../services/workingModeService";
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
            categoryAPI.middleware,
            forumAPI.middleware,
            tagAPI.middleware,
        ])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']