import React from 'react'
import PropTypes from 'prop-types'
import Route from '../Route'
import classes from './Ticket.module.scss'

const baseUrl = 'https://pics.avs.io/99/36/'

const Ticket = ({ price, carrier, routeInfo }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.price}>{`${price} Р`}</div>
      <div className="logo">
        <img
          src={`${baseUrl}${carrier}.png`}
          alt="logo"
        />
      </div>
    </div>
    <Route info={routeInfo[0]} />
    <Route info={routeInfo[1]} />
  </div>
)

Ticket.defaultProps = { routeInfo: [{}, {}], price: null, carrier: null }

Ticket.propTypes = {
  routeInfo: PropTypes.arrayOf(PropTypes.shape()),
  price: PropTypes.number,
  carrier: PropTypes.string,
}

export default Ticket
