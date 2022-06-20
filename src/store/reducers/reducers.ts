import { jobTypeAPI } from '../../services/JobTypeService'
import { opportunityAPI } from '../../services/OpportunityService'
import { projectAPI } from '../../services/ProjectService'
import { statusAPI } from '../../services/StatusService'
import { workingModeAPI } from '../../services/WorkingModeService'
import generalReducer from './generalSlice/generalSlice'
import authReducer from './isAuth/isAuth'
import filterReducer from './filterSlice/filterSlice'
import adminReducer from './adminSlice/adminSlice'
import { authAdminAPI } from '../../services/AuthAdminService'

export default {
    authReducer,
    generalReducer,
    filterReducer,
    adminReducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [opportunityAPI.reducerPath]: opportunityAPI.reducer,
    [statusAPI.reducerPath]: statusAPI.reducer,
    [jobTypeAPI.reducerPath]: jobTypeAPI.reducer,
    [workingModeAPI.reducerPath]: workingModeAPI.reducer,
    [authAdminAPI.reducerPath]: authAdminAPI.reducer,
}