import React from 'react'

import './App.modules.scss'
import Tabs from '../Tabs'
import TicketList from '../TicketList'
import Filter from '../Filter'

const App = () => (
  <div className="app">
    <Filter />
    <Tabs />
    <TicketList />
  </div>
)

export default App
