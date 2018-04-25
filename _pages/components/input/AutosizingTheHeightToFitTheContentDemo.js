import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;


const expComponent = () => (
  <div>
    <TextArea placeholder="Autosize height based on content lines" autosize />
    <div style={{ margin: '24px 0' }} />
    <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
  </div>
)
export default expComponent
