// React-related
import React from "react"

import { Timeline, Icon } from 'antd'
import {
    Table,
    Divider,
    Tag,
    Card,
    Alert,
    Avatar,
    Row,
    Col
} from 'antd'

export default () => (
    <Card bordered={false}>
        <h3>Activity Timeline for <i>John Smith</i></h3>
        <Timeline className="marginTop-30">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
    </Card>
)
