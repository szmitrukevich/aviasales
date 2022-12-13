import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classes from './Filter.module.scss'
import FilterItem from '../FilterItem'

const Filter = ({ checked }) => {
  const filtersData = [
    { amount: 'all', value: 'Все' },
    { amount: '1', value: '1 пересадка' },
    { amount: '2', value: '2 пересадки' },
    { amount: '3', value: '3 пересадки' },
  ]
  const [checkedList, setCheckedList] = useState({ ...checked })
  useEffect(() => {
    setCheckedList(checked)
  }, [checked])
  const filterList = filtersData.map((item) => (
    <FilterItem
      value={item.value}
      amount={item.amount}
      checked={checkedList[item.amount]}
      key={item.amount}
    />
  ))
  return (
    <div className={classes.container}>
      <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <ul className={classes.list}>{filterList}</ul>
    </div>
  )
}

Filter.defaultProps = { checked: {} }

Filter.propTypes = { checked: PropTypes.shape({}) }

function mapStateToProps(store) {
  return { checked: store.filter.checked }
}

export default connect(mapStateToProps)(Filter)
