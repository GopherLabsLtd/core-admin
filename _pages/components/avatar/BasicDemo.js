import React from 'react'
import { Avatar } from 'antd';


const expComponent = () => (
    <div>
  <div>
    <div>
      <Avatar size="large" icon="user" />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div>
    </div>
)
export default expComponent
