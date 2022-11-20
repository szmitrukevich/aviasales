import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
// import devToolsEnhancer from 'remote-redux-devtools'
import filterReducer from './filterReducer'
import sortReducer from './sortReducer'
import asyncDataReducer from './asyncDataReducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  data: asyncDataReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

// setInterval(() => console.log(store.getState()), 3000)
export default store
