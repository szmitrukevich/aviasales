import React from 'react'
import { Radio } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import sortChange from '../../actions/sortChange'
import './Tabs.scss'
import logo from '../../assets/logos/Logo.svg'

const Tabs = ({ updateSort }) => {
  const groupStyle = {
    width: '100%',
    borderRadius: '5px',
  }
  const btnStyle = {
    height: '50px',
    width: '167px',
    textAlign: 'center',
    paddingTop: '12px',
    lineHeight: '20px',
    fontSize: '12px',
    fontWeight: '600',
  }
  return (
    <div className="Tabs">
      <div className="Tabs_image">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <Radio.Group
        defaultValue="cheapeast"
        buttonStyle="solid"
        style={groupStyle}
      >
        <Radio.Button
          value="cheapeast"
          style={btnStyle}
          onClick={() => updateSort('cheapeast')}
        >
          САМЫЙ ДЕШЁВЫЙ
        </Radio.Button>
        <Radio.Button
          value="fastest"
          style={btnStyle}
          onClick={() => updateSort('fastest')}
        >
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button
          value="optimal"
          style={btnStyle}
          onClick={() => updateSort('optimal')}
        >
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
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
