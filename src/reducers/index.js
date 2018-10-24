import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    Search: searchReducer,
    form: formReducer
});

export default rootReducer