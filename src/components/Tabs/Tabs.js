import React from 'react'
import { Radio } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import sortChange from '../../actions/sortChange'
import './Tabs.scss'

const groupStyle = { width: '100%', borderRadius: '20px' }
const btnStyle = {
  height: '50px',
  width: '33.3%',
  textAlign: 'center',
  paddingTop: '12px',
  lineHeight: '20px',
  fontSize: '12px',
  fontWeight: '600',
}

const Tabs = ({ updateSort }) => {
  const btnList = {
    cheapest: 'САМЫЙ ДЕШЁВЫЙ',
    fastest: 'САМЫЙ БЫСТРЫЙ',
    optimal: 'ОПТИМАЛЬНЫЙ',
  }
  const btns = Object.entries(btnList).map((item) => (
    <Radio.Button
      value={item[0]}
      style={btnStyle}
      onClick={() => updateSort(item[0])}
      key={item[0]}
    >
      {item[1]}
    </Radio.Button>
  ))
  return (
    <div className="Tabs">
      <Radio.Group
        defaultValue="cheapest"
        buttonStyle="solid"
        style={groupStyle}
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
