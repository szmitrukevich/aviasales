import React from 'react'
import classes from './Route.module.scss'

const Route = () => (
  <div className={classes.container}>
    <div className="direction">10:45-08:00</div>
    <div style={{ position: 'absolute', color: '#A0B0B9', fontSize: '12px', top: '-18px' }}>MOW - HKT</div>
    <div className="duration">21ч 15м</div>
    <div style={{ position: 'absolute', color: '#A0B0B9', fontSize: '12px', top: '-18px', left: '170px' }}>В ПУТИ</div>
    <div className={classes.transfers}>HKG, JNB</div>
    <div
      style={{ position: 'absolute', color: '#A0B0B9', fontSize: '12px', top: '-18px', left: '320px', width: '140px' }}
    >
      1 ПЕРЕСАДКА
    </div>
  </div>
)

export default Route
