import React from 'react'
import { message, Button } from 'antd';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};


const expComponent = () => (
    <div>
  <Button onClick={success}>Display a loading indicator</Button>
    </div>
)
export default expComponent
