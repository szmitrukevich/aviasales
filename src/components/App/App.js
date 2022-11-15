import React from 'react'

import Tabs from '../Tabs'
import TicketList from '../TicketList'
import Filter from '../Filter'
import classes from './App.module.scss'

const App = () => (
  <div className={classes.app}>
    <div className={classes.wrapper}>
      <Filter />
      <div className={classes.container}>
        <Tabs />
        <TicketList />
      </div>
    </div>
  </div>
)

export default App
