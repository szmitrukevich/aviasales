import React from 'react'
import { Radio } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import sortChange from '../../redux/actions/sortChange'
import classes from './Tabs.module.scss'

const Tabs = ({ updateSort }) => {
  const btnList = [
    { filter: 'cheapest', value: 'САМЫЙ ДЕШЁВЫЙ' },
    { filter: 'fastest', value: 'САМЫЙ БЫСТРЫЙ' },
    { filter: 'optimal', value: 'ОПТИМАЛЬНЫЙ' },
  ]
  const btns = btnList.map((item) => (
    <Radio.Button
      value={item.filter}
      onClick={() => updateSort(item.filter)}
      key={item.filter}
    >
      <div className={classes.text}>{item.value}</div>
    </Radio.Button>
  ))
  return (
    <div className={classes.wrapper}>
      <Radio.Group
        defaultValue="cheapest"
        buttonStyle="solid"
      >
        {btns}
      </Radio.Group>
    </div>
  )
}

Tabs.defaultProps = { updateSort: () => null }

Tabs.propTypes = { updateSort: PropTypes.func }
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    updateSort: (tab) => {
      dispatch(sortChange(tab))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
