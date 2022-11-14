import React from 'react'
import PropTypes from 'prop-types'
import classes from './FilterItem.module.scss'

const FilterItem = ({ value, amount }) => (
  <li className={classes.filter__item}>
    <input
      id={amount}
      type="checkbox"
      name={amount}
      value={amount}
      className={classes.filter__checkbox}
    />
    <label htmlFor={amount}>{value}</label>
  </li>
)

FilterItem.defaultProps = {
  value: 'Все',
  amount: 'all',
}

FilterItem.propTypes = {
  value: PropTypes.string,
  amount: PropTypes.string,
}

export default FilterItem
