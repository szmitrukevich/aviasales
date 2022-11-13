import React from 'react'
import { Radio } from 'antd'
import './App.scss'
import 'antd/dist/antd.min.css'

const App = () => (
  <div>
    <Radio.Group
      defaultValue="a"
      buttonStyle="solid"
    >
      <Radio.Button value="a">Самый дешёвый</Radio.Button>
      <Radio.Button value="b">Самый быстрый</Radio.Button>
      <Radio.Button value="c">Оптимальный</Radio.Button>
    </Radio.Group>
  </div>
)

export default App
