import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.scss'

const Button = ({ onClick, variant, text }) => (
  <div className={classes[variant]}>
    <button
      className={classes.button}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  </div>
)

Button.defaultProps = { onClick: () => null, variant: '', text: '' }
Button.propTypes = { onClick: PropTypes.func, variant: PropTypes.string, text: PropTypes.string }
export default Button
