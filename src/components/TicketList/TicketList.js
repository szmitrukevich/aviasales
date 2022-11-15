import React from 'react'
import classes from './TicketList.module.scss'
import Ticket from '../Ticket'
import Button from '../Button'

const TicketList = () => (
  <div className={classes.wrapper}>
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Button />
  </div>
)

export default TicketList
