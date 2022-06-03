import { opportunityAPI } from '../../services/OpportunityService'
import { projectAPI } from '../../services/ProjectService'
import generalReducer from './generalSlice/generalSlice'
import authReducer from './isAuth/isAuth'

export default {
    authReducer,
    generalReducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [opportunityAPI.reducerPath]: opportunityAPI.reducer
}