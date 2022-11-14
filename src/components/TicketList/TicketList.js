import React from 'react'
import './TicketList.module.scss'
import Ticket from '../Ticket'
import Button from '../Button'

const TicketList = () => (
  <div className="ticketList">
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Button />
  </div>
)

export default TicketList
