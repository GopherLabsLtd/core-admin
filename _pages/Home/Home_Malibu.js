// React-related
import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Networking
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
import { Carousel } from 'antd';

// Charts
import {
    AreaChart, Area, Tooltip, ResponsiveContainer
} from 'recharts'

// Misc
import { formatNumbers } from '../../_data/Tools.js'
import { widgetActionsMenu } from './commons/charts'

const data = [
  { name: 'Day 1', users: 4800, applicants: 4900, amt: 2400 },
  { name: 'Day 2', users: 3400, applicants: 6200, amt: 2210 },
  { name: 'Day 3', users: 2000, applicants: 5000, amt: 2290 },
  { name: 'Day 4', users: 2780, applicants: 3908, amt: 2000 },
  { name: 'Day 5', users: 1890, applicants: 4800, amt: 2181 },
  { name: 'Day 6', users: 2390, applicants: 3800, amt: 2500 },
  { name: 'Day 7', users: 3490, applicants: 4800, amt: 2100 },
]

const followersData = [
    {name: 'Week 1', follow: 4000, unfollow: 2400},
    {name: 'Week 2', follow: 3000, unfollow: 1398},
    {name: 'Week 3', follow: 2000, unfollow: 9800},
    {name: 'Week 4', follow: 2780, unfollow: 3908}
];

const listData = [];
for (let i = 0; i < 2; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const pagination = {
  pageSize: 1,
  current: 1,
  total: listData.length,
  onChange: (() => {}),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class HomePageMalibu extends React.Component {
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
        this.fetchQuotes()
    }

    fetchQuotes = () => {
        this.setState({
            ...this.state,
            quotes: {
                ...this.state.quotes,
                stocksQuotes: API_URLS.quotes.STOCKS_MOCK,
                cryptoQuotes: API_URLS.quotes.CRYPTOS_MOCK
            },
            isLoading: {
                ...this.state.isLoading,
                stocksQuotes: false,
                cryptoQuotes: false
            }
        })
    }

    render() {
        const { isLoading, quotes } = this.state
        return (
            <div className="with-pattern">
                <div>
                    <h4>Quick Statistics</h4>

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

                    <Row gutter={16} className="marginTop-30">
                        {/* <Col className="gutter-row" span={18}>
                            <Card bordered={false}>
                                <AreaChart
                                    width={730} height={250} data={data}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2196F3" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#6c78e4" stopOpacity={0}/>
                                        </linearGradient>
                                        
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ff9a8d" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#ff6f90" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>

                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#2196F3" fillOpacity={1} strokeWidth={2} fill="url(#colorUv)" />
                                    <Area type="monotone" dataKey="pv" stroke="#ff9a8d" fillOpacity={1} strokeWidth={2} fill="url(#colorPv)" />
                                </AreaChart>
                            </Card>
                        </Col> */}

                        <Col className="gutter-row" xs={24} md={12} lg={9}>
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

                        <Col className="gutter-row" xs={24} md={12} lg={9}>
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
                                <ResponsiveContainer width="100%" height={200}>
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
                                    <p>
                                        <Icon type="sync" style={{ marginRight: 5 }} /> Just updated
                                    </p>
                                </div>
                            </Card>
                        </Col>

                        <Col className="gutter-row" xs={24} md={24} lg={6}>
                            <Link to={'/'}>
                                <Card bordered={false} className="hoverable gradient-primary circle-figure">
                                    <div className="circle light">
                                        <span>23</span>

                                        <Icon type="right" />
                                    </div>

                                    <div className="content">
                                        <h3>Comments</h3>

                                        <p>From xuvaa61, mike23 and 7 others</p>
                                    </div>
                                </Card>
                            </Link>

                            <Link to={'/'}>
                                <Card bordered={false} className="hoverable gradient-secondary circle-figure marginTop-15">
                                    <div className="circle light">
                                        <span>77</span>

                                        <Icon type="right" />
                                    </div>

                                    <div className="content">
                                        <h3>New Jobs</h3>

                                        <p>By Hooli, Pied Piper and 63 others</p>
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                    </Row>

                    {/*
                        Stock Quotes
                    */}
                    <h4 className="marginTop-60 marginBottom-20">Top Performing Tech Stocks</h4>
                    <Spin spinning={isLoading.stocksQuotes}>
                        <div className="widget-core-links">
                            <Row gutter={16}>
                                {quotes && quotes.stocksQuotes && quotes.stocksQuotes.map((quote, index) =>
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

                    {/*
                        Crypto Quotes
                    */}
                    <h4 className="marginTop-30 marginBottom-20">Top Performing Cryptocurrencies</h4>
                    <Spin spinning={isLoading.cryptoQuotes}>
                        <div className="widget-core-links">
                            <Row gutter={16}>
                                {quotes && quotes.cryptoQuotes && quotes.cryptoQuotes.map((quote, index) =>
                                    <Col key={`cryptoQuote-${index}`} className="gutter-row" xs={24} sm={12} md={8}>
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

                    <Row gutter={16} className="marginTop-60">
                        <Col className="gutter-row" xs={24} md={12} lg={8}>
                            <h4 className="marginBottom-20">Post Views</h4>
                            
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

                        {/* <Col className="gutter-row" xs={24} md={12} lg={8}>
                            <h4 className="marginBottom-20">Follow Trends</h4>
                            
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
                                                    December 2017 <Icon type="down" />
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
                                className="widget bordered"
                            >
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart
                                        width={500} height={300} data={followersData}
                                    >
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />

                                        <Bar dataKey="follow" stackId="a" fill="#353d81" />
                                        <Bar dataKey="unfollow" stackId="a" fill="rgba(53, 61, 129, 0.6)" />
                                    </BarChart>
                                </ResponsiveContainer>

                                <div className="spaced">
                                    <p>
                                        <Icon type="sync" style={{ marginRight: 5 }} /> Just updated
                                    </p>
                                </div>
                            </Card>
                        </Col> */}

                        <Col className="gutter-row" xs={24} md={12} lg={16}>
                            <h4 className="marginBottom-20">Sales</h4>
                            
                            <Card
                                bordered={false} style={{ height: 332 }}
                                className="gradient-primary center-absolute narrow dark marginTop-15"
                            >
                                <h3>Congragulations Mike</h3>

                                <p>You have gone 30% over your quotas this month! You've been added to this month's top agents page</p>

                                <Button size='large'>
                                    Check it out
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

HomePageMalibu.propTypes = {}

export default
    compose(
        connect(
            (state) => ({
                auth: state.auth,
                localization: state.localization,
            }),
            // mapDispatchToProps
        )
    )(HomePageMalibu)