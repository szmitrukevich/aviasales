import React from 'react'
import { Radio } from 'antd'
// import { connect } from 'react-redux'
import 'antd/dist/antd.min.css'
import './Tabs.scss'
import logo from '../../assets/logos/Logo.svg'

const Tabs = () => {
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
        defaultValue="cheap"
        buttonStyle="solid"
        style={groupStyle}
      >
        <Radio.Button
          value="cheap"
          style={btnStyle}
          onClick={(e) => console.log(e.target.value)}
        >
          САМЫЙ ДЕШЁВЫЙ
        </Radio.Button>
        <Radio.Button
          value="fast"
          style={btnStyle}
          onClick={(e) => console.log(e.target.value)}
        >
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button
          value="optimal"
          style={btnStyle}
          onClick={(e) => console.log(e.target.value)}
        >
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default Tabs
