import React from 'react'
import { Badge, Icon } from 'antd';


const expComponent = () => (
  <div>
    <Badge dot>
      <Icon type="notification" />
    </Badge>
    <Badge count={0} dot>
      <Icon type="notification" />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </div>
)
export default expComponent
