import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.scss'

const Button = ({ onClick, btnClass, text }) => (
  <div className={classes[btnClass]}>
    <button
      className={classes.button}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  </div>
)

Button.defaultProps = { onClick: () => null, btnClass: '', text: '' }
Button.propTypes = { onClick: PropTypes.func, btnClass: PropTypes.string, text: PropTypes.string }
export default Button
