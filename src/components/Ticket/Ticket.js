import React from 'react'
import Route from '../Route'
import classes from './Ticket.module.scss'
import s7 from '../../assets/logos/S7 Logo.svg'

const Ticket = () => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.price}>13400 Р</div>
      <div className="logo">
        <img
          src={s7}
          alt="logo"
        />
      </div>
    </div>
    <Route />
    <Route />
  </div>
)

export default Ticket
