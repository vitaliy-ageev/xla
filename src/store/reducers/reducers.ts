import { jobTypeAPI } from '../../services/jobTypeService'
import { opportunityAPI } from '../../services/opportunityService'
import { projectAPI } from '../../services/projectService'
import { statusAPI } from '../../services/statusService'
import { workingModeAPI } from '../../services/workingModeService'
import validateReducer from './validateSlice/validateSlice'
import generalReducer from './generalSlice/generalSlice'
import filterReducer from './filterSlice/filterSlice'
import userReducer from './userSlice/userSlice'
import { categoryAPI } from '../../services/categoryService'
import { forumAPI } from '../../services/forumService'
import { tagAPI } from '../../services/tagsService'


export default {
    generalReducer,
    filterReducer,
    userReducer,
    validateReducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [opportunityAPI.reducerPath]: opportunityAPI.reducer,
    [statusAPI.reducerPath]: statusAPI.reducer,
    [jobTypeAPI.reducerPath]: jobTypeAPI.reducer,
    [workingModeAPI.reducerPath]: workingModeAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [forumAPI.reducerPath]: forumAPI.reducer,
    [tagAPI.reducerPath]: tagAPI.reducer
}