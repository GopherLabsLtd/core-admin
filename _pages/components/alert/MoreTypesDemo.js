import React from 'react'
import { Alert } from 'antd';


const expComponent = () => (
  <div>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </div>
)
export default expComponent
