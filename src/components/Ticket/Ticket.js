import React from 'react'
import Route from '../Route'
import './Ticket.module.scss'
import s7 from '../../assets/logos/S7 Logo.svg'

const Ticket = () => (
  <div className="ticket">
    <div className="price">13400</div>
    <div className="logo">
      <img
        src={s7}
        alt="logo"
      />
    </div>
    <Route />
    <Route />
  </div>
)

export default Ticket
