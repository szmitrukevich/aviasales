import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import filterChange from '../../redux/actions/filterChange'
import { updateFilters } from '../../utils/filterLogic'
import classes from './FilterItem.module.scss'

const FilterItem = ({ value, amount, isChecked, filterChanged, checkedList }) => (
  <li className={classes.item}>
    <input
      id={amount}
      type="checkbox"
      value={amount}
      className={classes.checkbox}
      checked={isChecked}
      onChange={() => filterChanged(updateFilters(amount, checkedList))}
    />
    <label htmlFor={amount}>{value}</label>
  </li>
)

FilterItem.defaultProps = {
  value: 'Все',
  amount: 'all',
  isChecked: true,
  filterChanged: () => null,
  checkedList: {},
}

FilterItem.propTypes = {
  value: PropTypes.string,
  amount: PropTypes.string,
  isChecked: PropTypes.bool,
  filterChanged: PropTypes.func,
  checkedList: PropTypes.shape(),
}
function mapStateToProps(state) {
  return { checkedList: state.filter.checked }
}
function mapDispatchToProps(dispatch) {
  return {
    filterChanged: (filter) => {
      dispatch(filterChange(filter))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)
