import { jobTypeAPI } from '../../services/JobTypeService'
import { opportunityAPI } from '../../services/OpportunityService'
import { projectAPI } from '../../services/ProjectService'
import { statusAPI } from '../../services/StatusService'
import { workingModeAPI } from '../../services/WorkingModeService'
import generalReducer from './generalSlice/generalSlice'
import authReducer from './isAuth/isAuth'
import filterReducer from './filterSlice/filterSlice'

export default {
    authReducer,
    generalReducer,
    filterReducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [opportunityAPI.reducerPath]: opportunityAPI.reducer,
    [statusAPI.reducerPath]: statusAPI.reducer,
    [jobTypeAPI.reducerPath]: jobTypeAPI.reducer,
    [workingModeAPI.reducerPath]: workingModeAPI.reducer
}