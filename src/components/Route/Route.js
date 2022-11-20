import React from 'react'
import PropTypes from 'prop-types'
import classes from './Route.module.scss'

const Route = ({ time }) => (
  <div className={classes.container}>
    <div className="direction">10:45-08:00</div>
    <div style={{ position: 'absolute', color: '#A0B0B9', fontSize: '12px', top: '-18px' }}>MOW - HKT</div>
    <div className="duration">{time}</div>
    <div style={{ position: 'absolute', color: '#A0B0B9', fontSize: '12px', top: '-18px', left: '170px' }}>В ПУТИ</div>
    <div className={classes.transfers}>HKG, JNB</div>
    <div
      style={{ position: 'absolute', color: '#A0B0B9', fontSize: '12px', top: '-18px', left: '320px', width: '140px' }}
    >
      1 ПЕРЕСАДКА
    </div>
  </div>
)

Route.defaultProps = { time: null }

Route.propTypes = { time: PropTypes.number }

export default Route
