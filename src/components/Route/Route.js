import React from 'react'
import { format, addMinutes } from 'date-fns'
import PropTypes from 'prop-types'
import classes from './Route.module.scss'

const Route = ({ info }) => {
  const { origin, destination, date, duration, stops } = info
  const style = { position: 'absolute', color: '#A0B0B9', fontSize: '12px', top: '-18px' }
  const transfer = (data) => {
    if (data.length === 1) {
      return '1 ПЕРEСАДКА'
    }
    if (data.length > 1) {
      return `${data.length} ПЕРЕСАДКИ`
    }
    return 'БЕЗ ПЕРЕСАДОК'
  }
  const travelDur = `${Math.floor(duration / 60)}ч ${duration % 60}м`
  const formDate = `${format(new Date(date), 'hh:mm')} - ${format(addMinutes(new Date(date), duration), 'hh:mm')}`
  return (
    <div className={classes.container}>
      <div className="direction">{formDate}</div>
      <div style={{ ...style }}>{`${origin} - ${destination}`}</div>
      <div
        className="duration"
        style={{ position: 'relative', left: '-20px' }}
      >
        {travelDur}
      </div>
      <div style={{ ...style, left: '160px' }}>В ПУТИ</div>
      <div className={classes.transfers}>{stops.join(',')}</div>
      <div style={{ ...style, left: '320px', width: '140px' }}>{transfer(stops)}</div>
    </div>
  )
}

Route.defaultProps = { info: {} }

Route.propTypes = { info: PropTypes.shape }

export default Route
