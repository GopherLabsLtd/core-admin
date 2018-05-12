import React from 'react'
import { Affix, Button } from 'antd';


const expComponent = () => (
    <div>
  <div>
    <Affix>
      <Button type="primary">Affix top</Button>
    </Affix>
    <br />
    <Affix offsetBottom={0}>
      <Button type="primary">Affix bottom</Button>
    </Affix>
  </div>
    </div>
)
export default expComponent
