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
import API_URLS from '../_data/apis'

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
import { formatNumbers } from '../_data/Tools.js'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    filters: [{
      text: 'Joe',
      value: 'Joe',
    }, {
      text: 'Jim',
      value: 'Jim',
    }, {
      text: 'Submenu',
      value: 'Submenu',
      children: [{
        text: 'Green',
        value: 'Green',
      }, {
        text: 'Black',
        value: 'Black',
      }],
    }],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  }, {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'Address',
    dataIndex: 'address',
    filters: [{
      text: 'London',
      value: 'London',
    }, {
      text: 'New York',
      value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
}];
  
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];
  
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
                        <div className="top-message">
                            <p>You're almost there <Button size='large' type='primary'>Continue</Button></p>
                        </div>

                        <Steps current={1} progressDot={customDot}>
                            <Step title="Personal Information" />
                            <Step title="Financial Statements" />
                            <Step title="Document Verfication" />
                            <Step title="In-person interview" />
                        </Steps>
                    </Card>

                    <h4 className="marginTop-30">Sales</h4>
                    <Card
                        bordered={false} style={{ height: 332 }}
                        className="gradient-secondary center-absolute narrow dark"
                    >
                        <h3>Congragulations Mike</h3>

                        <p>You have gone 30% over your quotas this month! You've been added to this month's top agents page</p>

                        <Button size='large'>
                            Check it out
                        </Button>
                    </Card>

                    <Card bordered={false} className="marginTop-30">
                        <Row gutter={16}>
                            <Col className="gutter-row" xs={24} md={24} lg={24}>
                                <Table columns={columns} dataSource={data} onChange={onChange} />
                            </Col>
                        </Row>
                    </Card>

                    {/*
                        Stock Quotes
                    */}
                    <h4 className="marginTop-60 marginBottom-20">Top Performing Tech Stocks</h4>
                    <Spin spinning={isLoading.stocksQuotes}>
                        <div className="widget-core-links">
                            <Row gutter={16}>
                                {quotes && quotes.stocksQuotes.map((quote, index) =>
                                    <Col key={`stockQuote-${index}`} className="gutter-row" xs={24} sm={12} md={8}>
                                        <div className="diamond-logo">
                                            <img src={require(`../img/demo_assets/logos/${quote.name}.svg`)} />
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
                    <Spin spinning={isLoading.stocksQuotes}>
                        <div className="widget-core-links">
                            <Row gutter={16}>
                                {quotes && quotes.stocksQuotes.map((quote, index) =>
                                    <Col key={`stockQuote-${index}`} className="gutter-row" xs={24} sm={12} md={8}>
                                        <div className="diamond-logo">
                                            <img src={require(`../img/demo_assets/logos/${quote.name}.svg`)} />
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