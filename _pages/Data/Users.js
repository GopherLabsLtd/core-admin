import React from "react"
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

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

// Misc
import { formatNumbers } from '../../_data/Tools.js'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
        <span>
            {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                    color = 'volcano';
                }
                return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
            })}
        </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
        </span>
    ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];

export default () => (
    <div className="with-pattern">
        <div>
            <h4>Online Users</h4>

            <Card bordered={false} className="top-stats">
                <Row gutter={16} style={{ margin: 0 }}>
                    <Col className="gutter-row" xs={24} md={12} lg={8}>
                        <Link to=''>
                            <Avatar size="large" icon="safety" className="success" />

                            <div>
                                <h5>Operational</h5>
                                <p>72 systems</p>
                            </div>
                        </Link>
                    </Col>

                    <Col className="gutter-row" xs={24} md={12} lg={8}>
                        <Link to=''>
                            <Avatar size="large" icon="api" />

                            <div>
                                <h5>API Usage</h5>
                                <p>{formatNumbers(31759)}</p>
                            </div>
                        </Link>
                    </Col>

                    <Col className="gutter-row" xs={24} md={12} lg={8}>
                        <Link to=''>
                            <Avatar size="large" icon="calendar" />

                            <div>
                                <h5>Sales</h5>
                                <p>{formatNumbers(17213)} this month</p>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Card>

            {/* <Alert
                message="Goal Reached"
                description="You have achieved your goal of 80% user traction!"
                type="info"
            /> */}

            <Card bordered={false} className="no-padding marginTop-30">
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </Card>
        </div>
    </div>
)