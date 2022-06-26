import { jobTypeAPI } from '../../services/JobTypeService'
import { opportunityAPI } from '../../services/OpportunityService'
import { projectAPI } from '../../services/ProjectService'
import { statusAPI } from '../../services/StatusService'
import { workingModeAPI } from '../../services/WorkingModeService'
import generalReducer from './generalSlice/generalSlice'
import authReducer from './isAuth/isAuth'
import filterReducer from './filterSlice/filterSlice'
import userReducer from './userSlice/userSlice'
import { userAPI } from '../../services/user/userAPI'
import { authAPI } from '../../services/auth/authAPI'


export default {
    authReducer,
    generalReducer,
    filterReducer,
    userReducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [opportunityAPI.reducerPath]: opportunityAPI.reducer,
    [statusAPI.reducerPath]: statusAPI.reducer,
    [jobTypeAPI.reducerPath]: jobTypeAPI.reducer,
    [workingModeAPI.reducerPath]: workingModeAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
}