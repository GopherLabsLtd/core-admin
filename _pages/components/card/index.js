import React from 'react'

    import BasicCardDemo from './BasicCardDemo.js'
import NoBorderDemo from './NoBorderDemo.js'
import GridCardDemo from './GridCardDemo.js'
import CustomizedContentDemo from './CustomizedContentDemo.js'
import CardInColumnDemo from './CardInColumnDemo.js'
import InnerCardDemo from './InnerCardDemo.js'
import LoadingCardDemo from './LoadingCardDemo.js'
import SupportMoreContentConfigurationDemo from './SupportMoreContentConfigurationDemo.js'
import SimpleCardDemo from './SimpleCardDemo.js'
import WithTabsDemo from './WithTabsDemo.js'
    import { Card } from 'antd';
    const ReactMarkdown = require('react-markdown')
    require('./styles.scss')
const markDownInput = `---

Simple rectangular container.

## When To Use

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## API

\`\`\`html &lt;Card title=&quot;Card title&quot;&gt;Card content&lt;/Card&gt;\`\`\`

### Card

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| actions | The action list, shows at the bottom of the Card. | Array&lt;ReactNode&gt; | - |
| bodyStyle | Inline style to apply to the card content | object | - |
| bordered | Toggles rendering of the border around the card | boolean | \`\`\`true\`\`\` |
| cover | Card cover | ReactNode | - |
| extra | Content to render in the top-right corner of the card | string|ReactNode | - |
| hoverable | Lift up when hovering card | boolean | false |
| loading | Shows a loading indicator while the contents of the card are being fetched | boolean | false |
| tabList | List of TabPane's head. | Array&lt;{key: string, tab: ReactNode}&gt; | - |
| activeTabKey | Current TabPane's key | string | - |
| defaultActiveTabKey | Initial active TabPane's key, if \`\`\`activeTabKey\`\`\` is not set. | string | - |
| title | Card title | string|ReactNode | - |
| type | Card style type, can be set to \`\`\`inner\`\`\` or not set | string | - |
| onTabChange | Callback when tab is switched | (key) =&gt; void | - |

### Card.Grid

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| className | className of container | string | - |
| style | style object of container | object | - |

### Card.Meta

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| avatar | avatar or icon | ReactNode | - |
| className | className of container | string | - |
| description | description content | ReactNode | - |
| style | style object of container | object | - |
| title | title content | ReactNode | - |
`
const expComponent = () => (
        <div>
            <h4>Card</h4>

            <Card bordered={false}>
                        <BasicCardDemo />
        <NoBorderDemo />
        <GridCardDemo />
        <CustomizedContentDemo />
        <CardInColumnDemo />
        <InnerCardDemo />
        <LoadingCardDemo />
        <SupportMoreContentConfigurationDemo />
        <SimpleCardDemo />
        <WithTabsDemo />

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        