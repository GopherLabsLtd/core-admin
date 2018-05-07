import React from 'react'

    import TypeDemo from './TypeDemo.js'
import ButtonGroupDemo from './ButtonGroupDemo.js'
import DisabledDemo from './DisabledDemo.js'
import GhostButtonDemo from './GhostButtonDemo.js'
import IconDemo from './IconDemo.js'
import LoadingDemo from './LoadingDemo.js'
import MultipleButtonsDemo from './MultipleButtonsDemo.js'
import SizeDemo from './SizeDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## API

To get a customized button, just set \`type\`/\`shape\`/\`size\`/\`loading\`/\`disabled\`.

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| ghost | make background transparent and invert text and border colors, added in 2.7 | boolean | false |
| href | redirect url of link button | string | - |
| htmlType | set the original html \`type\` of \`button\`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | \`button\` |
| icon | set the icon of button, see: Icon component | string | - |
| loading | set the loading status of button | boolean \| { delay: number } | false |
| shape | can be set to \`circle\` or omitted | string | - |
| size | can be set to \`small\` \`large\` or omitted | string | \`default\` |
| target | same as target attribute of a, works when href is specified | string | - |
| type | can be set to \`primary\` \`ghost\` \`dashed\` \`danger\`(added in 2.7) or omitted (meaning \`default\`) | string | \`default\` |
| onClick | set the handler to handle \`click\` event | function | - |

\`<Button>Hello world!</Button>\` will be rendered into \`<button><span>Hello world!</span></button>\`, and all the properties which are not listed above will be transferred to the \`<button>\` tag.

\`<Button href="http://example.com">Hello world!</Button>\` will be rendered into \`<a href="http://example.com"><span>Hello world!</span></a>\`.

<style>
[id^=components-button-demo-] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^=components-button-demo-] .ant-btn-group > .ant-btn,
[id^=components-button-demo-] .ant-btn-group > span > .ant-btn {
  margin-right: 0;
}
</style>
`
const expComponent = () => (
        <div>
            <h4>Button</h4>
            <p>

To trigger an operation.

</p>

            <Card bordered={false}>
                        <Card title="Type" bordered={true}><TypeDemo /></Card>
        <Card title="Button Group" bordered={true}><ButtonGroupDemo /></Card>
        <Card title="Disabled" bordered={true}><DisabledDemo /></Card>
        <Card title="Ghost Button" bordered={true}><GhostButtonDemo /></Card>
        <Card title="Icon" bordered={true}><IconDemo /></Card>
        <Card title="Loading" bordered={true}><LoadingDemo /></Card>
        <Card title="Multiple Buttons" bordered={true}><MultipleButtonsDemo /></Card>
        <Card title="Size" bordered={true}><SizeDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        