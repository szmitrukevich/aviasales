import React from 'react'
import 'antd/dist/antd.min.css'
import Tabs from '../Tabs'
import TicketList from '../TicketList'
import Filter from '../Filter'
import classes from './App.module.scss'
import logo from '../../assets/logos/Logo.svg'

const App = () => (
  <div className={classes.app}>
    <div className={classes.app_image}>
      <img
        src={logo}
        alt="logo"
      />
    </div>
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
