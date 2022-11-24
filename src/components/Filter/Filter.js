import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classes from './Filter.module.scss'
import FilterItem from '../FilterItem'

const Filter = ({ checked }) => {
  const filtersData = {
    all: 'Все',
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  }
  const [checkedList, setCheckedList] = useState({ ...checked })
  useEffect(() => {
    setCheckedList(checked)
  }, [checked])
  const filterList = Object.entries(filtersData).map((item) => (
    <FilterItem
      value={item[1]}
      amount={item[0]}
      checked={checkedList[item[0]]}
      key={item[0]}
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
