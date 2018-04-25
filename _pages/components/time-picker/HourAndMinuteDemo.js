import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';


const expComponent = () => (
  <TimePicker defaultValue={moment('12:08', format)} format={format} />
)
export default expComponent
