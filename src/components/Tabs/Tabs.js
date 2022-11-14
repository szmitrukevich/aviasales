import React from 'react'
import { Radio } from 'antd'
import 'antd/dist/antd.min.css'

const Tabs = () => (
  <div className="tabs">
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

export default Tabs
