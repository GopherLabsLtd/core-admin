import React from 'react'

    import BasicUsageDemo from './BasicUsageDemo.js'
import CustomSpinningIndicatorDemo from './CustomSpinningIndicatorDemo.js'
import DelayDemo from './DelayDemo.js'
import InsideAContainerDemo from './InsideAContainerDemo.js'
import EmbeddedModeDemo from './EmbeddedModeDemo.js'
import SizeDemo from './SizeDemo.js'
import CustomizedDescriptionDemo from './CustomizedDescriptionDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

A spinner for displaying loading state of a page or a section.

## When To Use

When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.

## API

| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
| delay | specifies a delay in milliseconds for loading state (prevent flush) | number (milliseconds) | - |
| indicator | React node of the spinning indicator | ReactElement | - |
| size | size of Spin, options: \`\`\`small\`\`\`, \`\`\`default\`\`\` and \`\`\`large\`\`\` | string | \`\`\`default\`\`\` |
| spinning | whether Spin is spinning | boolean | true |
| tip | customize description content when Spin has children | string | - |
| wrapperClassName | className of wrapper when Spin has children | string | - |
`
const expComponent = () => (
        <div>
            <h4>Spin</h4>
            <p>

A spinner for displaying loading state of a page or a section.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic Usage" bordered={true}><BasicUsageDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Custom Spinning Indicator" bordered={true}><CustomSpinningIndicatorDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Delay" bordered={true}><DelayDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Inside A Container" bordered={true}><InsideAContainerDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Embedded Mode" bordered={true}><EmbeddedModeDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Size" bordered={true}><SizeDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Customized Description" bordered={true}><CustomizedDescriptionDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        