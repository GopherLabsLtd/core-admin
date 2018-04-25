import React from 'react'
import { Breadcrumb, Icon } from 'antd';


const expComponent = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      Application
    </Breadcrumb.Item>
  </Breadcrumb>
)
export default expComponent
