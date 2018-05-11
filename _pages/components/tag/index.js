import React from 'react'

    import BasicDemo from './BasicDemo.js'
import CheckableDemo from './CheckableDemo.js'
import ColorfulTagDemo from './ColorfulTagDemo.js'
import AddRemoveDynamicallyDemo from './AddRemoveDynamicallyDemo.js'
import HotTagsDemo from './HotTagsDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Tag for categorizing or markup.

## When To Use

- It can be used to tag by dimension or property.

- When categorizing.

## API

### Tag

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| afterClose | Callback executed when close animation is completed | () => void | - |
| closable | Whether Tag can be closed | boolean | \`false\` |
| color | Color of the Tag | string | - |
| onClose | Callback executed when tag is closed | (e) => void | - |

### Tag.CheckableTag

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| checked | Checked status of Tag | boolean | \`false\` |
| onChange | Callback executed when Tag is checked/unchecked | (checked) => void | - |
`
const expComponent = () => (
        <div id="component-demos-tag">
            <div className="title-bar">
                <h4>Tag</h4>
                <p>

Tag for categorizing or markup.

</p>
            </div>

            <Card bordered={false}>
                <div className="component-demo">
        <h4>Basic</h4>
        <BasicDemo />
        </div>
<div className="component-demo">
        <h4>Checkable</h4>
        <CheckableDemo />
        </div>
<div className="component-demo">
        <h4>Colorful Tag</h4>
        <ColorfulTagDemo />
        </div>
<div className="component-demo">
        <h4>Add Remove Dynamically</h4>
        <AddRemoveDynamicallyDemo />
        </div>
<div className="component-demo">
        <h4>Hot Tags</h4>
        <HotTagsDemo />
        </div>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        