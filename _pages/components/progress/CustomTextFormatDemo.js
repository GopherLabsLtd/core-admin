import React from 'react'
import { Progress } from 'antd';


const expComponent = () => (
    <div>
  <div>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>
    </div>
)
export default expComponent
