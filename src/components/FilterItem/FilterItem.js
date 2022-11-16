import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classes from './FilterItem.module.scss'

let mapStateToProps
const FilterItem = ({ value, amount }, checked) => {
  mapStateToProps = (store) => {
    console.log(store)
    return { checked: store.checked[amount] }
  }
  return (
    <li className={classes.item}>
      <input
        id={amount}
        type="checkbox"
        name={amount}
        value={amount}
        className={classes.checkbox}
        defaultChecked={checked}
      />
      <label htmlFor={amount}>{value}</label>
    </li>
  )
}

FilterItem.defaultProps = {
  value: 'Все',
  amount: 'all',
}

FilterItem.propTypes = {
  value: PropTypes.string,
  amount: PropTypes.string,
}

export default connect(mapStateToProps)(FilterItem)
