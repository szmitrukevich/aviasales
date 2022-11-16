import React from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './index.module.scss'
import App from './components/App'
import filterReducer from './reducers/filterReducer'
// import tabsReducer from './reducers/tabsReducer'

const initialState = {
  checked: {
    all: true,
    none: true,
    1: true,
    2: true,
    3: true,
  },
  tab: 'fast',
}

const store = configureStore({ reducer: filterReducer, preloadedState: initialState })
// setInterval(() => console.log(store.getState()), 5000)
const container = document.querySelector('.aviasales')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
