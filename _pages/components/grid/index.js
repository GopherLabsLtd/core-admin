import React from 'react'

    import BasicGridDemo from './BasicGridDemo.js'
import FlexAlignmentDemo from './FlexAlignmentDemo.js'
import FlexOrderDemo from './FlexOrderDemo.js'
import FlexLayoutDemo from './FlexLayoutDemo.js'
import GridGutterDemo from './GridGutterDemo.js'
import ColumnOffsetDemo from './ColumnOffsetDemo.js'
import PlaygroundDemo from './PlaygroundDemo.js'
import MoreResponsiveDemo from './MoreResponsiveDemo.js'
import ResponsiveDemo from './ResponsiveDemo.js'
import GridSortDemo from './GridSortDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

24 Grids System。

## Design concept

<div class="grid-demo">
<div class="ant-row demo-row">
  <div class="ant-col-24 demo-col demo-col-1">
    100%
  </div>
</div>
<div class="ant-row demo-row">
  <div class="ant-col-6 demo-col demo-col-2">
    25%
  </div>
  <div class="ant-col-6 demo-col demo-col-3">
    25%
  </div>
  <div class="ant-col-6 demo-col demo-col-2">
    25%
  </div>
  <div class="ant-col-6 demo-col demo-col-3">
    25%
  </div>
</div>
<div class="ant-row demo-row">
  <div class="ant-col-8 demo-col demo-col-4">
    33.33%
  </div>
  <div class="ant-col-8 demo-col demo-col-5">
    33.33%
  </div>
  <div class="ant-col-8 demo-col demo-col-4">
    33.33%
  </div>
</div>
<div class="ant-row demo-row">
  <div class="ant-col-12 demo-col demo-col-1">
    50%
  </div>
  <div class="ant-col-12 demo-col demo-col-3">
    50%
  </div>
</div>
<div class="ant-row demo-row">
  <div class="ant-col-16 demo-col demo-col-4">
    66.66%
  </div>
  <div class="ant-col-8 demo-col demo-col-5">
    33.33%
  </div>
</div>
</div>

In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 aliquots.

We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.

## Outline

In the grid system, we define the frame outside the information area based on \`row\` and \`column\`, to ensure that every area can have stable arrangement.

Following is a brief look at how it works:

- Establish a set of \`column\` in the horizontal space defined by \`row\` (abbreviated col)
- Your content elements should be placed directly in the \`col\`, and only \`col\` should be placed directly in \`row\`
- The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by \`.col-8\` (\`span=8\`).
- If the sum of \`col\` spans in a \`row\` are more than 24, then the overflowing \`col\` as a whole will start a new line arrangement.

## Flex layout

Our grid systems support Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using \`order\`.

Flex layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.

## API

If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:

- [react-flexbox-grid](http://roylee0704.github.io/react-flexbox-grid/)
- [react-blocks](https://github.com/whoisandy/react-blocks/)

### Row

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| align | the vertical alignment of the flex layout: \`top\` \`middle\` \`bottom\` | string | \`top\` |
| gutter | spacing between grids, could be a number or a object like \`{ xs: 8, sm: 16, md: 24}\` | number/object | 0 |
| justify | horizontal arrangement of the flex layout: \`start\` \`end\` \`center\` \`space-around\` \`space-between\` | string | \`start\` |
| type | layout mode, optional \`flex\`, [browser support](http://caniuse.com/#search=flex) | string |  |

### Col

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| offset | the number of cells to offset Col from the left | number | 0 |
| order | raster order, used in \`flex\` layout mode | number | 0 |
| pull | the number of cells that raster is moved to the left | number | 0 |
| push | the number of cells that raster is moved to the right | number | 0 |
| span | raster number of cells to occupy, 0 corresponds to \`display: none\` | number | none |
| xs | \`<576px\` and also default setting, could be a \`span\` value or an object containing above props | number\|object | - |
| sm | \`≥576px\`, could be a \`span\` value or an object containing above props | number\|object | - |
| md | \`≥768px\`, could be a \`span\` value or an object containing above props | number\|object | - |
| lg | \`≥992px\`, could be a \`span\` value or an object containing above props | number\|object | - |
| xl | \`≥1200px\`, could be a \`span\` value or an object containing above props | number\|object | - |
| xxl | \`≥1600px\`, could be a \`span\` value or an object containing above props | number\|object | - |

The breakpoints of responsive grid follow [BootStrap 4 media queries rules](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)(not including \`occasionally part\`).
`
const expComponent = () => (
        <div>
            <h4>Grid</h4>
            <p>

24 Grids System。

</p>

            <Card bordered={false}>
                        <Card title="Basic Grid" bordered={true}><BasicGridDemo /></Card>
        <Card title="Flex Alignment" bordered={true}><FlexAlignmentDemo /></Card>
        <Card title="Flex Order" bordered={true}><FlexOrderDemo /></Card>
        <Card title="Flex Layout" bordered={true}><FlexLayoutDemo /></Card>
        <Card title="Grid Gutter" bordered={true}><GridGutterDemo /></Card>
        <Card title="Column Offset" bordered={true}><ColumnOffsetDemo /></Card>
        <Card title="Playground" bordered={true}><PlaygroundDemo /></Card>
        <Card title="More Responsive" bordered={true}><MoreResponsiveDemo /></Card>
        <Card title="Responsive" bordered={true}><ResponsiveDemo /></Card>
        <Card title="Grid Sort" bordered={true}><GridSortDemo /></Card>

                <ReactMarkdown source={markDownInput} escapeHtml={false} />
            </Card>
        </div>
    )
    export default expComponent
                        