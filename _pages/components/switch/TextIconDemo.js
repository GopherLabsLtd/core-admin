import React from 'react'
import { Switch, Icon } from 'antd';


const expComponent = () => (
    <div>
  <div>
    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked />
  </div>
    </div>
)
export default expComponent
