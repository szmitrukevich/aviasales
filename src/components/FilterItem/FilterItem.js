import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './FilterItem.module.scss'

const FilterItem = ({ value, amount, checked, updateFilter }) => (
  // const dispatch = useDispatch()
  // const filter = useSelector((state) => state.checked[amount])
  // const updateFilter = () => {
  //   dispatch({ type: `TOGGLE_${amount.toUpperCase()}` })
  // }
  <li className={classes.item}>
    <input
      id={amount}
      type="checkbox"
      value={amount}
      className={classes.checkbox}
      defaultChecked={checked}
      onClick={() => updateFilter(amount)}
    />
    <label htmlFor={amount}>{value}</label>
  </li>
)

FilterItem.defaultProps = {
  value: 'Все',
  amount: 'all',
  checked: {},
  updateFilter: () => null,
}

FilterItem.propTypes = {
  value: PropTypes.string,
  amount: PropTypes.string,
  checked: PropTypes.shape({}),
  updateFilter: PropTypes.func,
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    updateFilter: (filter) => {
      console.log(filter)
      const action = { type: `TOGGLE_${filter}` }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)
