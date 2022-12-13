import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import filterChange from '../../redux/actions/filterChange'
import classes from './FilterItem.module.scss'

const FilterItem = ({ value, amount, checked, updateFilter }) => (
  <li className={classes.item}>
    <input
      id={amount}
      type="checkbox"
      value={amount}
      className={classes.checkbox}
      checked={checked}
      onChange={() => updateFilter(amount)}
    />
    <label htmlFor={amount}>{value}</label>
  </li>
)

FilterItem.defaultProps = {
  value: 'Все',
  amount: 'all',
  checked: true,
  updateFilter: () => null,
}

FilterItem.propTypes = {
  value: PropTypes.string,
  amount: PropTypes.string,
  checked: PropTypes.bool,
  updateFilter: PropTypes.func,
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    updateFilter: (filter) => {
      dispatch(filterChange(filter))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)
