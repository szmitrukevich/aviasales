import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.module.scss'
import App from './components/App'

const container = document.querySelector('.aviasales')
const root = createRoot(container)
root.render(<App />)
