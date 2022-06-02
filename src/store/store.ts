import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { opportunityAPI } from "../services/OpportunityService";
import { projectAPI } from "../services/ProjectService";
import reducers from "./reducers/reducers";

const rootReducer = combineReducers(reducers)

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([projectAPI.middleware, opportunityAPI.middleware])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']