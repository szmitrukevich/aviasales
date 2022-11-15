import React from 'react'
import classes from './Button.module.scss'

const Button = () => (
  <div className={classes['show-more']}>
    <button
      className={classes.button}
      type="button"
    >
      Показать ещё 5 билетов!
    </button>
  </div>
)

export default Button
