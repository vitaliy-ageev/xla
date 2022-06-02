import { opportunityAPI } from '../../services/OpportunityService'
import { projectAPI } from '../../services/ProjectService'
import authReducer from './isAuth/isAuth'

export default {
    authReducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [opportunityAPI.reducerPath]: opportunityAPI.reducer
}