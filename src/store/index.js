import {createStore, combineReducers} from 'redux'
import buildingReducer from './buildingReducer'
import { composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    buildingReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store