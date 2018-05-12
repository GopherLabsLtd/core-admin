import React from 'react'
import { TimePicker, Button } from 'antd';

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}


const expComponent = () => (
    <div>
        <TimePickerAddonDemo />
    </div>
)
export default expComponent
