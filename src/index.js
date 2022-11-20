import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './index.module.scss'
import App from './components/App'

const container = document.querySelector('.aviasales')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
