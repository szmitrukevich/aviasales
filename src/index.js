import React from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'

import './index.module.scss'
import App from './components/App'
import filterReducer from './reducers/filterReducer'

const initialState = {
  filter: 'all',
  checked: {
    all: true,
    1: true,
    2: true,
    3: true,
  },
  tab: 'fast',
}

const store = configureStore({ reducer: filterReducer, preloadedState: initialState })
store.dispatch({ type: 'TOGGLE_1' })

const container = document.querySelector('.aviasales')
const root = createRoot(container)
root.render(<App />)
