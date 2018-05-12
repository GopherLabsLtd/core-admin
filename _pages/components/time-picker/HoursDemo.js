import React from 'react'
import { TimePicker } from 'antd';

function onChange(time, timeString) {
  console.log(time, timeString);
}


const expComponent = () => (
    <div>
  <div>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </div>
    </div>
)
export default expComponent
