import React from 'react'
import PropTypes from 'prop-types'
import Route from '../Route'
import classes from './Ticket.module.scss'

const Ticket = ({ price, time }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.price}>{price}</div>
      <div className="logo">
        <img
          src="https://pics.avs.io/99/36/S7.png"
          alt="logo"
        />
      </div>
    </div>
    <Route time={time} />
    <Route time={time} />
  </div>
)

Ticket.defaultProps = { time: null, price: null }

Ticket.propTypes = { time: PropTypes.number, price: PropTypes.number }

export default Ticket
