import React from 'react'
import './Filter.module.scss'
import FilterItem from '../FilterItem'

const Filter = () => (
  <div className="filter">
    <span className="filter__title">Количество пересадок</span>
    <ul className="filter-list">
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
