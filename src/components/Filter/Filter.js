import React from 'react'
import classes from './Filter.module.scss'
import FilterItem from '../FilterItem'

const Filter = () => (
  <div className={classes.container}>
    <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
    <ul className={classes.list}>
      <FilterItem
        value="Все"
        amount="all"
      />
      <FilterItem
        value="Без пересадок"
        amount="none"
      />
      <FilterItem
        value="1 пересадка"
        amount="1"
      />
      <FilterItem
        value="2 пересадки"
        amount="2"
      />
      <FilterItem
        value="3 пересадки"
        amount="3"
      />
    </ul>
  </div>
)

export default Filter
