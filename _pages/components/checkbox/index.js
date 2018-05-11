import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CheckAllDemo from './CheckAllDemo.js'
import ControlledCheckboxDemo from './ControlledCheckboxDemo.js'
import DisabledDemo from './DisabledDemo.js'
import CheckboxGroupDemo from './CheckboxGroupDemo.js'
import UseWithGridDemo from './UseWithGridDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Checkbox.

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## API

### Checkbox

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoFocus | get focus when component mounted | boolean | false |
| checked | Specifies whether the checkbox is selected. | boolean | false |
| defaultChecked | Specifies the initial state: whether or not the checkbox is selected. | boolean | false |
| disabled | Disable checkbox | boolean | false |
| onChange | The callback function that is triggered when the state changes. | Function(e:Event) | - |

### Checkbox Group

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| defaultValue | Default selected value | string\[] | \[] |
| disabled | Disable all checkboxes | boolean | false |
| options | Specifies options | string\[] | \[] |
| value | Used for setting the currently selected value. | string\[] | \[] |
| onChange | The callback function that is triggered when the state changes. | Function(checkedValue) | - |

## Methods

### Checkbox

| Name | Description |
| ---- | ----------- |
| blur() | remove focus |
| focus() | get focus |
`
const expComponent = () => (
        <div id="component-demos-checkbox">
            <div className="title-bar">
                <h4>Checkbox</h4>
                <p>

Checkbox.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo basic">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo check-all">
        <h4>Check All</h4>
        <CheckAllDemo />
        </div>
<div className="component-demo controlled-checkbox">
        <h4>Controlled Checkbox</h4>
        <ControlledCheckboxDemo />
        </div>
<div className="component-demo disabled">
        <h4>Disabled</h4>
        <DisabledDemo />
        </div>
<div className="component-demo checkbox-group">
        <h4>Checkbox Group</h4>
        <CheckboxGroupDemo />
        </div>
<div className="component-demo use-with-grid">
        <h4>Use With Grid</h4>
        <UseWithGridDemo />
        </div>

                <div id="demo-documentation">
                    <ReactMarkdown source={markDownInput} escapeHtml={false} />
                </div>
            </Card>
        </div>
    )
    export default expComponent
                        