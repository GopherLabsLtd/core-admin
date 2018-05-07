import React from 'react'

    import BasicDemo from './BasicDemo.js'
import DynamicDemo from './DynamicDemo.js'
import RedBadgeDemo from './RedBadgeDemo.js'
import StandaloneDemo from './StandaloneDemo.js'
import ClickableDemo from './ClickableDemo.js'
import OverflowCountDemo from './OverflowCountDemo.js'
import StatusDemo from './StatusDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Small numerical value or status descriptor for UI elements.

## When To Use

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## API

\`\`\`jsx &lt;Badge count={5}&gt; &lt;a href=&quot;#&quot; className=&quot;head-example&quot; /&gt; &lt;/Badge&gt;\`\`\`

\`\`\`jsx &lt;Badge count={5} /&gt;\`\`\`

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| count | Number to show in badge | number|ReactNode |  |
| dot | Whether to display a red dot instead of \`\`\`count\`\`\` | boolean | \`\`\`false\`\`\` |
| offset | set offset of the badge dot, like\`\`\`[x, y]\`\`\` | \`\`\`[number, number]\`\`\` | - |
| overflowCount | Max count to show | number | 99 |
| showZero | Whether to show badge when \`\`\`count\`\`\` is zero | boolean | \`\`\`false\`\`\` |
| status | Set Badge as a status dot | \`\`\`success\`\`\` | \`\`\`processing\`\`\` | \`\`\`default\`\`\` | \`\`\`error\`\`\` | \`\`\`warning\`\`\` | \`\`\`''\`\`\` |
| text | If \`\`\`status\`\`\` is set, \`\`\`text\`\`\` sets the display text of the status \`\`\`dot\`\`\` | string | \`\`\`''\`\`\` |
`
const expComponent = () => (
        <div>
            <h4>Badge</h4>
            <p>

Small numerical value or status descriptor for UI elements.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Dynamic" bordered={true}><DynamicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Red Badge" bordered={true}><RedBadgeDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Standalone" bordered={true}><StandaloneDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Clickable" bordered={true}><ClickableDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Overflow Count" bordered={true}><OverflowCountDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Status" bordered={true}><StatusDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        