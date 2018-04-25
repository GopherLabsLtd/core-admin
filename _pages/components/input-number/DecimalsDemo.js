import React from 'react'
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}


const expComponent = () => (
  <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
)
export default expComponent
