// React-related
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  IndexRoute,
  Redirect
} from "react-router-dom";
import PropTypes from "prop-types";
import { instanceOf } from "prop-types";
import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Networking
import axios from "axios";

// Antd
import { Layout, Breadcrumb } from "antd";
const { Header, Content, Sider } = Layout;
import { Menu, Dropdown, Icon } from "antd";
import { Input } from "antd";
import { Button, Radio } from "antd";
import { Form, Checkbox } from "antd";
const FormItem = Form.Item;
import { message } from "antd";
const SubMenu = Menu.SubMenu;

// Components
import HomeComponent from "./Home"
import FooterComponent from './Footer'

// Assets
import LOGO from "../img/logo.svg";

// Redux
// Actions
import { updateAuth } from "../__actions/auth";
import { updateLang } from "../__actions/localization";

// Pages
import ComponentsPage from '../_pages/Components'

import ComponentDemos from '../_data/component-demos'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nunito+Sans', 'Nunito:700']
  }
});

const HeaderComponent = ({ userData, updateLang, signOut, toggleCollapsed }) => (
  <Header id="header">
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={LOGO} />
        </Link>
      </div>

      {userData && (
        <div className="header-right">
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

                <Menu.Item key="1" onClick={updateLang.bind(this, "fr-ca")}>
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

                <Menu.Item key="3">
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
          >
            <a className="ant-dropdown-link" href="#">
              <Icon type="user" /> {userData.fullName} <Icon type="down" />
            </a>
          </Dropdown>

          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="0">
                  <Link to={"/"}>
                    Calendar View
                  </Link>
                </Menu.Item>

                <Menu.Item key="1" onClick={updateLang.bind(this, "fr-ca")}>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    Manage my classroom(s)
                  </a>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item key="3">
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    My Profile
                  </a>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <a className="ant-dropdown-link pages-menu" href="#">
              <Icon type="ellipsis" />
            </a>
          </Dropdown>
        </div>
      )}
    </div>
  </Header>
);

class App extends React.Component {
  state = {
    collapsed: false
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { loading } = this.state
        , { getFieldDecorator } = this.props.form
        , auth = { isAuthenticated: true }

    if (auth.isAuthenticated)
      return (
        <Layout className="fullheight">
          <HeaderComponent
            toggleCollapsed={this.toggleCollapsed}
          />

          <Layout>
            <Sider
              id="app-sidebar"
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.toggleCollapsed}
            >
              <div className="side-menu">
                <Menu
                  defaultSelectedKeys={['1']}
                  // defaultOpenKeys={['sub1']}
                  mode="inline"
                  inlineCollapsed={this.state.collapsed}
                  activeKey={window.location.pathname}
                >
                  {/* <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                  </Menu.Item>

                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                  </Menu.Item>

                  <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                  </Menu.Item> */}

                  <Menu.Item key="3">
                    <Link to='/'>
                      Home
                    </Link>
                  </Menu.Item>

                  {ComponentDemos.map((compCategory, index) =>
                    <SubMenu
                      key={`compCategory-${index}`}
                      title={<span><Icon type="appstore" /><span>{compCategory.name}</span></span>}
                    >
                      {compCategory.items.map((item, i) =>
                        <Menu.Item key={`comp-nav-${item.path}`}>
                          <Link to={`/components/${item.path}`}>
                            {item.name}
                          </Link>
                        </Menu.Item>
                      )}
                    </SubMenu>
                  )}
                </Menu>
              </div>
            </Sider>

            <Content id="app-content">
              <div className="container">
                <Switch>
                  <Route path="/" component={HomeComponent} exact={true} />

                  <Route path="/components" component={ComponentsPage} exact={false} />

                  {/* <Route
                    path="/form/create"
                    component={CreateFormComponent}
                    exact={true}
                  />
                  <Route
                    path="/events/:id"
                    component={EventDetailsComponent}
                    exact={true}
                  />
                  <Route path="*" exact={true} component={NotFoundComponent} /> */}
                </Switch>
              </div>
            </Content>
          </Layout>

          <FooterComponent />
        </Layout>
      );
    else
      return (
        <Layout className="layout">
          <HeaderComponent />

          <div className="container">
            <h3 className="marginTop-30">Sign In</h3>
          </div>
        </Layout>
      );
  }
}

App.propTypes = {
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateAuth,
      updateLang
    },
    dispatch
  );
}

export default compose(
  connect(
    state => ({
      auth: state.auth,
      localization: state.localization
    }),
    mapDispatchToProps
  )
)(Form.create()(App));
