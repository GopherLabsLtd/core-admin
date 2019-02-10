// React-related
import React from "react"
import {
  Route,
  Link,
  Switch
} from "react-router-dom"
import { compose } from "redux"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// Antd
import { Layout } from "antd"
const { Header, Content, Sider } = Layout
import { Menu, Dropdown, Icon } from "antd"
const SubMenu = Menu.SubMenu;
import { Form, Input } from "antd"
import { Modal } from 'antd'

// Components
import HomePageMalibu from '../_pages/Home/Home_Malibu'
import HomePageLA from '../_pages/Home/Home_LA'
import UsersPage from '../_pages/Data/Users'
import TimelinePage from '../_pages/Data/Timeline'
import EmptyPage from '../_pages/Data/Empty'
import CommunicationPage from '../_pages/Management/Communication'

import FooterComponent from './Footer'
import NotificationsComponent from './App/Notifications'

// Assets
import LOGO from "../img/logo.svg";

// Redux
// Actions
import { updateAuth } from "../__actions/auth";

// Pages
import NotFoundPage from './404'
import LoginPage from '../_pages/Login'

import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Nunito+Sans', 'Nunito:700']
  }
})


const HeaderComponent = ({ showSearchModal, signOut }) => (
  <Header id="header">
    <div className="container-fluid">
      <div className="header-right">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '69px' }}
        >
          <Menu.Item key="1" onClick={showSearchModal.bind(this, true)}>
            <Icon type="search" />
          </Menu.Item>

          <Menu.Item key="2" className="dropdown">
            <NotificationsComponent />
          </Menu.Item>
          
          <Menu.Item key="3">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        updateLang("en-ca");
                      }}
                    >
                      English (Canada)
                    </a>
                  </Menu.Item>

                  <Menu.Item key="1">
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        updateLang("fr-ca");
                      }}
                    >
                      French (Canada)
                    </a>
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item key="3" className="with-anchor">
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      <Icon type="logout" /> Sign Out
                    </a>
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
              placement="bottomRight"
            >
              <a className="ant-dropdown-link" href="#">
                <Icon type="user" /> Alex <Icon type="down" />
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  </Header>
);

class App extends React.Component {
  state = {
    collapsed: true,
    searchVisible: false,
    searchResults: []
  }

  componentDidMount() {
    this.highlightCorrectMenuItem()

    this.props.history.listen(this.highlightCorrectMenuItem)
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  _showSearchModal = (show) => {
    this.setState({
      ...this.state,
      searchVisible: show
    })

    if (show) {
      setTimeout(() => {
        this.searchInput.focus()
        document.body.style.overflowY = 'scroll'
      })
    }
  }

  _signOut = () => {
    this.props.updateAuth(false)
  }

  highlightCorrectMenuItem = () => {
    const { pathname } = window.location
    const componentPath = pathname.replace("/components/", "")

    this.setState({
      ...this.state,
      navSelectedKey: `nav-${componentPath}`
    })
  }

  render() {
    const { collapsed, searchResults, searchQuery, navSelectedKey } = this.state
        , { isAuthenticated } = this.props.auth

    if (isAuthenticated)
      return (
        <Layout className="fullheight">
          <HeaderComponent
            showSearchModal={this._showSearchModal}
            signOut={this._signOut}
          />

          <Layout>
            <Sider
              id="app-sidebar"
              collapsible
              collapsed={collapsed}
              onCollapse={this.toggleCollapsed}
            >
              <div className="logo">
                <Link to="/">
                  <img src={LOGO} />
                </Link>
              </div>
              <div className="side-menu">
                <Menu
                  mode="inline"
                  inlineCollapsed={this.state.collapsed}
                  selectedKeys={[navSelectedKey]}
                >
                  <SubMenu
                      className="ant-menu-item-selected"
                      key={`compCategory-home`}
                      title={
                        <Link to='/'>
                          <span><Icon type='home' /><span>Home</span></span>
                        </Link>
                      }
                  >
                    <Menu.Item key='nav-/'>
                      <Link to='/'>
                        Home - Malibu
                      </Link>
                    </Menu.Item>

                    <Menu.Item key='nav-/la'>
                      <Link to='/la'>
                        Home - L.A.
                      </Link>
                    </Menu.Item>

                    <Menu.Item onClick={this._signOut}>
                      Login
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu
                      key={`compCategory-data`}
                      title={
                        <Link to='/users'>
                          <span><Icon type='profile' /><span>Data</span></span>
                        </Link>
                      }
                  >
                    <Menu.Item key='nav-/users'>
                      <Link to='/users'>
                        Tables
                      </Link>
                    </Menu.Item>

                    <Menu.Item key='nav-/timeline'>
                      <Link to='/timeline'>
                        Timeline
                      </Link>
                    </Menu.Item>

                    <Menu.Item key='nav-/empty'>
                      <Link to='/empty'>
                        Empty
                      </Link>
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu
                      key={`compCategory-management`}
                      title={
                        <Link to='/communication'>
                          <span><Icon type='calendar' /><span>Communication</span></span>
                        </Link>
                      }
                  >
                    <Menu.Item key='nav-/communication'>
                      <Link to='/communication'>
                        Communications
                      </Link>
                    </Menu.Item>

                    <Menu.Item key='nav-/timeline'>
                      <Link to='/timeline'>
                        Timeline
                      </Link>
                    </Menu.Item>

                    <Menu.Item key='nav-/empty'>
                      <Link to='/empty'>
                        Empty
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </Sider>

            <Content id="app-content" className={collapsed && 'wide'}>
              <div className="content-wrapper container">
                <Switch>
                  <Route path="/" component={HomePageMalibu} exact={true} />
                  <Route path="/la" component={HomePageLA} exact={true} />

                  {/* Data screens */}
                  <Route path="/users" component={UsersPage} exact={true} />
                  <Route path="/timeline" component={TimelinePage} exact={true} />
                  <Route path="/empty" component={EmptyPage} exact={true} />

                  {/* Management screens */}
                  <Route path="/communication" component={CommunicationPage} exact={true} />

                  <Route path="*" exact={true} component={NotFoundPage} />
                </Switch>
              </div>

              <FooterComponent />
            </Content>
            
            {/*
              * Search Modal
            */}
            <Modal
              visible={this.state.searchVisible}
              title={null}
              footer={null}
              className="search-modal"
              onCancel={this._showSearchModal.bind(this, false)}
            >
              <Input
                placeholder="Search Components"
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={() => true}
                ref={searchInput => this.searchInput = searchInput}
              />

              <Menu
              >
                {searchResults.map((result, index) =>
                  {
                    const resultIndex = result.name.toLowerCase().indexOf(searchQuery)
                    return (
                      <Menu.Item key={`search-result-${index}`} onClick={this._showSearchModal.bind(this, false)}>
                        <Link to={`/components/${result.path}`}>
                          {result.name.substring(0, resultIndex)}
                          <span>{result.name.substring(resultIndex, resultIndex + searchQuery.length)}</span>
                          {result.name.substring(resultIndex + searchQuery.length)}
                        </Link>
                      </Menu.Item>
                    )
                  }
                )}
              </Menu>
            </Modal>
          </Layout>
        </Layout>
      );
    else
      return <LoginPage />
  }
}

App.propTypes = {
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateAuth,
    },
    dispatch
  )
}

export default compose(
  connect(
    state => ({
      auth: state.auth,
    }),
    mapDispatchToProps
  )
)(Form.create()(App))
