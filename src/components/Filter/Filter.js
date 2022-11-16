import React from 'react'
import { connect } from 'react-redux'
import classes from './Filter.module.scss'
import FilterItem from '../FilterItem'

const Filter = (props) => {
  const filtersData = {
    all: 'Все',
    none: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  }
  console.log(Object.keys(filtersData))
  const filterList = Object.entries(filtersData).map((item) => (
    <FilterItem
      value={item[1]}
      amount={item[0]}
      // eslint-disable-next-line react/destructuring-assignment
      checked={props[item[0]]}
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

function mapStateToProps(store) {
  return store.checked
}

export default connect(mapStateToProps)(Filter)
