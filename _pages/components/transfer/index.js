import React from 'react'

    import AdvancedDemo from './AdvancedDemo.js'
import BasicDemo from './BasicDemo.js'
import CustomDatasourceDemo from './CustomDatasourceDemo.js'
import PerformanceTestDemo from './PerformanceTestDemo.js'
import SearchDemo from './SearchDemo.js'
    import { Card, Row, Col } from 'antd';
    const ReactMarkdown = require('react-markdown')
    const markDownInput = `---

Double column transfer choice box.

## When To Use

Transfer the elements between two columns in an intuitive and efficient way.

One or more elements can be selected from either column, one click on the proper 'direction' button, and the transfer is done. The left column is considered the 'source' and the right column is considered the 'target'. As you can see in the API description, these names are reflected in.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| className | A custom CSS class. | string | ['', ''] |
| dataSource | Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in \`\`\`targetKeys\`\`\` prop. | <a href="https://git.io/vMM64">TransferItem</a>[] | [] |
| filterOption | A function to determine whether an item should show in search result list | (inputValue, option): boolean |  |
| footer | A function used for rendering the footer. | (props): ReactNode |  |
| lazy | property of <a href="https://github.com/loktar00/react-lazy-load">react-lazy-load</a> for lazy rendering items. Turn off it by set to \`\`\`false\`\`\`. | object|boolean | \`\`\`{ height: 32, offset: 32 }\`\`\` |
| listStyle | A custom CSS style used for rendering the transfer columns. | object |  |
| notFoundContent | Text to display when a column is empty. | string|ReactNode | 'The list is empty' |
| operations | A set of operations that are sorted from bottom to top. | string[] | ['&gt;', '&lt;'] |
| render | The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with \`\`\`value\`\`\` and \`\`\`label\`\`\`, \`\`\`label\`\`\` is a React element and \`\`\`value\`\`\` is for title | Function(record) |  |
| searchPlaceholder | The hint text of the search box. | string | 'Search here' |
| selectedKeys | A set of keys of selected items. | string[] | [] |
| showSearch | If included, a search box is shown on each column. | boolean | false |
| targetKeys | A set of keys of elements that are listed on the right column. | string[] | [] |
| titles | A set of titles that are sorted from left to right. | string[] | - |
| onChange | A callback function that is executed when the transfer between columns is complete. | (targetKeys, direction, moveKeys): void |  |
| onScroll | A callback function which is executed when scroll options list | (direction, event): void |  |
| onSearchChange | A callback function which is executed when search field are changed | (direction: 'left'|'right', event: Event): void | - |
| onSelectChange | A callback function which is executed when selected items are changed. | (sourceSelectedKeys, targetSelectedKeys): void |  |

## Warning

According the <a href="http://facebook.github.io/react/docs/lists-and-keys.html#keys">standard</a> of React, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in \`\`\`dataSource\`\`\` array. By default, \`\`\`key\`\`\` property is used as an unique identifier.

If there's no \`\`\`key\`\`\` in your data, you should use \`\`\`rowKey\`\`\` to specify the key that will be used for uniquely identify each element.

\`\`\`jsx // eg. your primary key is \`uid\` return &lt;Transfer rowKey={record =&gt; record.uid} /&gt;;\`\`\`
`
const expComponent = () => (
        <div>
            <h4>Transfer</h4>
            <p>

Double column transfer choice box.

</p>

            <Card bordered={false}>
                <Row gutter={16}>
        <Col span={12}>
        <Card title="Advanced" bordered={true}><AdvancedDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Basic" bordered={true}><BasicDemo /></Card>
        </Col>
</Row>
<Row gutter={16}>
        <Col span={12}>
        <Card title="Custom Datasource" bordered={true}><CustomDatasourceDemo /></Card>
        </Col>
        <Col span={12}>
        <Card title="Performance Test" bordered={true}><PerformanceTestDemo /></Card>
        </Col>
</Row>
<Row gutter={30}>
        <Col span={12}>
        <Card title="Search" bordered={true}><SearchDemo /></Card>
        </Col>
</Row>

                <ReactMarkdown source={markDownInput} />
            </Card>
        </div>
    )
    export default expComponent
                        