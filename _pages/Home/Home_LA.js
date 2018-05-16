// React-related
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    IndexRoute,
    Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { instanceOf } from 'prop-types'
import { compose } from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Networking
import axios from 'axios'
import API_URLS from '../../_data/apis'

// Antd
import { Layout, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
import { Menu, Dropdown, Button } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
import { Spin, Progress, message } from 'antd'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { List, Table, Carousel } from 'antd'
import { Steps, Popover } from 'antd'
const Step = Steps.Step

// Charts
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend
} from 'recharts'

// Misc
import { formatNumbers } from '../../_data/Tools.js'
import { widgetActionsMenu } from './commons/charts'

const followersData = [
    {name: 'Week 1', follow: 4000, unfollow: 2400},
    {name: 'Week 2', follow: 3000, unfollow: 1398},
    {name: 'Week 3', follow: 2000, unfollow: 9800},
    {name: 'Week 4', follow: 2780, unfollow: 3908},
    {name: 'Week 5', follow: 4000, unfollow: 2400},
    {name: 'Week 6', follow: 3000, unfollow: 1398},
    {name: 'Week 7', follow: 2000, unfollow: 9800}
]

const data = [
    { name: 'Day 1', users: 4800, applicants: 4900, amt: 2400 },
    { name: 'Day 2', users: 3400, applicants: 6200, amt: 2210 },
    { name: 'Day 3', users: 2000, applicants: 5000, amt: 2290 },
    { name: 'Day 4', users: 2780, applicants: 3908, amt: 2000 },
    { name: 'Day 5', users: 1890, applicants: 4800, amt: 2181 },
    { name: 'Day 6', users: 2390, applicants: 3800, amt: 2500 },
    { name: 'Day 7', users: 3490, applicants: 4800, amt: 2100 },
]

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

const customDot = (dot, { status, index }) => (
    <Popover content={<span>step {index} status: {status}</span>}>
      {dot}
    </Popover>
)

class HomePageLA extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: {
                stocksQuotes: true,
                cryptoQuotes: true
            }
        }
    }

    componentDidMount() {
        this.fetchStockQuotes()
    }

    fetchStockQuotes = () => {
        const quotesParser = (data) => {
            const result = []
            data.map(stock => {
                const keys = Object.keys(stock)
                result.push({
                    name: stock[keys[0]],
                    price: stock[keys[1]],
                    up: Math.random() >= 0.5
                })
            })

            return result
        }

        const updateState = (result) => {
            this.setState({
                ...this.state,
                quotes: {
                    ...this.state.quotes,
                    stocksQuotes: result
                },
                isLoading: {
                    ...this.state.isLoading,
                    stocksQuotes: false
                }
            })
        }

        axios.get(API_URLS.quotes.stocks)
        .then(response => {
            console.log(response.data)
            
            updateState(quotesParser(response.data["Stock Quotes"]))
        })
        .catch(error => {
            console.log(error)

            updateState(quotesParser(API_URLS.quotes.stocksMock["Stock Quotes"]))
        })
    }

    render() {
        const { isLoading, quotes } = this.state
        return (
            <div className="with-pattern">
                <div>
                    <h4>Loan Application</h4>
                    <Card bordered={false} className="step-progress">
                        <div className="top-message gradient-primary">
                            <p>You're almost there <Button size='large' type='primary'>Continue</Button></p>
                        </div>

                        <Steps current={1} progressDot={customDot}>
                            <Step title="Personal Information" />
                            <Step title="Financial Statements" />
                            <Step title="Document Verification" />
                            <Step title="In-person interview" />
                        </Steps>
                    </Card>

                    <Row gutter={16} className="marginTop-30">
                        <Col className="gutter-row" xs={24} md={24} lg={16}>
                            <Card
                                title={
                                    <div className="head-container">
                                        <div className="title">
                                            <p>Active Users</p>
                                            <h4>{formatNumbers(7000)}</h4>
                                        </div>

                                        <div className="actions">
                                            <Dropdown overlay={widgetActionsMenu} placement="bottomRight" trigger={['click']}>
                                                <a className="ant-dropdown-link" href="#">
                                                    <Icon type="setting" />
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </div>
                                }
                                bordered={false}
                                className="widget"
                            >
                                <ResponsiveContainer width="100%" height={200}>
                                    <AreaChart
                                        width={500} height={250} data={data}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                    >
                                        <defs>
                                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#2196F3" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#6c78e4" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>

                                        <Tooltip />

                                        <Area type="monotone" dataKey="users" stroke="#2196F3" fillOpacity={1} strokeWidth={2} fill="url(#colorUv)" />
                                    </AreaChart>
                                </ResponsiveContainer>

                                <div className="spaced">
                                    <p>
                                        <Icon type="sync" style={{ marginRight: 5 }} /> Just updated
                                    </p>
                                </div>
                            </Card>
                        </Col>

                        <Col className="gutter-row" xs={24} md={24} lg={8}>
                            <Card
                                bordered={false} style={{ height: 316 }}
                                className="gradient-secondary center-absolute narrow dark"
                            >
                                <h3>Congrats Mike!</h3>

                                <p>You've been added to this month's top agents page</p>

                                <Button size='large'>
                                    Check it out
                                </Button>
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16} className="marginTop-30">
                        <Col className="gutter-row" xs={24} md={24} lg={16}>
                            <Card
                                title={
                                    <div className="head-container">
                                        <div className="title">
                                            <p>Job Applicants this Week</p>
                                            <h4>{formatNumbers(21379)}</h4>
                                        </div>

                                        <div className="actions">
                                            <Dropdown overlay={widgetActionsMenu} placement="bottomRight" trigger={['click']}>
                                                <a className="ant-dropdown-link" href="#">
                                                    <Icon type="setting" />
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </div>
                                }
                                bordered={false}
                                className="widget"
                            >
                                <ResponsiveContainer width="100%" height={210}>
                                    <AreaChart
                                        width={500} height={250} data={data}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                    >
                                        <defs>
                                            <linearGradient id="colorApplicants" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#ff9a8d" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#ff6f90" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>

                                        <Tooltip />

                                        <Area type="monotone" dataKey="applicants" stroke="#ff9a8d" fillOpacity={1} strokeWidth={2} fill="url(#colorApplicants)" />
                                    </AreaChart>
                                </ResponsiveContainer>

                                <div className="spaced">
                                    <Row gutter={30} className="marginTop-15">
                                        <Col className="gutter-row" xs={24} md={24} lg={8}>
                                            <h5 className="marginBottom-0">Candidate verifications</h5>
                                            <Progress percent={100} size="small" className="short" />
                                        </Col>

                                        <Col className="gutter-row" xs={24} md={24} lg={8}>
                                            <h5 className="marginBottom-0">Rejections issued</h5>
                                            <Progress percent={30} size="small" className="short" />
                                        </Col>

                                        <Col className="gutter-row" xs={24} md={24} lg={8}>
                                            <h5 className="marginBottom-0">Interviews concluded</h5>
                                            <Progress percent={50} status="active" size="small" className="short" />
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>

                        <Col className="gutter-row" xs={24} md={24} lg={8}>
                            <h4>Post Views</h4>
                            <Card
                                bordered={false}
                                className="widget bordered"
                                title={
                                    <div className="head-container">
                                        <div className="title center-vertical">
                                            <a href="#">
                                                Change goal
                                            </a>
                                        </div>

                                        <div className="actions">
                                            <Button type='primary' size='large'>
                                                View Goal
                                            </Button>
                                        </div>
                                    </div>
                                }
                            >
                                <Carousel className="light goals marginTop-30" autoplay>
                                    <div>
                                        <Progress type="circle" percent={75} />

                                        <p>Total views today</p>
                                        <h4>{formatNumbers(2700)}</h4>
                                    </div>

                                    <div>
                                        <Progress type="circle" percent={90} />

                                        <p>Total views this week</p>
                                        <h4>{formatNumbers(17000)}</h4>
                                    </div>
                                </Carousel>
                            </Card>
                        </Col>
                    </Row>
                    
                    <h4 className="marginTop-30">Follow Trends</h4>
                    <Card
                        title={
                            <div className="head-container">
                                <div className="title">
                                    <Dropdown overlay={
                                        <Menu>
                                            <Menu.Item key="0">
                                                <a href="http://www.alipay.com/">1st menu item</a>
                                            </Menu.Item>

                                            <Menu.Item key="1">
                                                <a href="http://www.taobao.com/">2nd menu item</a>
                                            </Menu.Item>

                                            <Menu.Divider />
                                            
                                            <Menu.Item key="3">3rd menu item</Menu.Item>
                                        </Menu>
                                    } trigger={['click']}>
                                        <a className="ant-dropdown-link" href="#">
                                            Q1 2018 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>

                                <div className="actions">
                                    <Dropdown overlay={widgetActionsMenu} placement="bottomRight" trigger={['click']}>
                                        <a className="ant-dropdown-link" href="#">
                                            <Icon type="setting" />
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                        }
                        bordered={false}
                        className="widget bordered add-chart-padding"
                    >
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                className="minimal-chart"
                                width={500} height={300}
                                data={followersData} barSize={30}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip cursor={{ fill: '#f9f9fd' }} />
                                <Legend />

                                <CartesianGrid strokeDasharsray="1 1" />

                                <Bar dataKey="follow" stackId="a" fill="#ff6e8e" />
                                <Bar dataKey="unfollow" stackId="a" fill="#fedcd2" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>

                    {/*
                        Stock Quotes
                    */}
                    <h4 className="marginTop-60">Top Performing Tech Stocks</h4>
                    <Spin spinning={isLoading.stocksQuotes}>
                        <div className="widget-core-links">
                            <Row gutter={16}>
                                {quotes && quotes.stocksQuotes.map((quote, index) =>
                                    <Col key={`stockQuote-${index}`} className="gutter-row" xs={24} sm={12} md={8}>
                                        <div className="diamond-logo">
                                            <img src={require(`../../img/demo_assets/logos/${quote.name}.svg`)} />
                                        </div>
                                        
                                        <div className="content">
                                            <p className="title">{quote.name} <Icon type={quote.up ? 'caret-up' : 'caret-down'} /></p>
                                            <p>${formatNumbers(quote.price)}</p>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </Spin>
                </div>
            </div>
        )
    }
}

HomePageLA.propTypes = {}

export default
    compose(
        connect(
            (state) => ({
                auth: state.auth,
                localization: state.localization,
            }),
            // mapDispatchToProps
        )
    )(HomePageLA)