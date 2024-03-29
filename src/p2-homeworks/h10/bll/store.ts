import { combineReducers, createStore } from 'redux'
import { themeReducer } from '../../h12/bll/themeReducer'
import {loadingReducer} from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themeReducer

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
