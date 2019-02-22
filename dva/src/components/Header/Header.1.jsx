import React from 'react';
import { Component } from 'react';
import { Tabs, Menu, Dropdown, Icon, message, Carousel } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';


// 下拉菜单
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu1 = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">Open Checking Account</Menu.Item>
    <Menu.Item key="2">Custom Debit Cards</Menu.Item>
    <Menu.Item key="3">Chip Card Technology</Menu.Item>
  </Menu>
);

// 选项卡菜单
const TabPane = Tabs.TabPane;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);
class Header extends Component {

  render() {
    return (
      <div className="site-header__wrapper" data-v-dc5e2b7e="">
        <div className="ada-skip-menu" data-v-7e0a7ae1="" data-v-dc5e2b7e=""><a href="#navigation" className="ada-skip-menu-item"
          data-v-7e0a7ae1="">Skip to Main Navigation</a> <a href="#main" className="ada-skip-menu-item" data-v-7e0a7ae1="">Skip
          to Main Content</a> <a href="#reach-out" className="ada-skip-menu-item" data-v-7e0a7ae1="">Skip to Contact Us</a>
          <a href="#footer" className="ada-skip-menu-item" data-v-7e0a7ae1="">Skip to Footer</a></div>
        <div className="container site-header" data-v-dc5e2b7e="">
          <div className="row" data-v-dc5e2b7e="">
            <div className="site-header__utility col-xl-12" data-v-dc5e2b7e="">
              <ul className="site-header__utility__nav" data-v-dc5e2b7e="">
                <li className="menu-item" data-v-541744a1="" data-v-dc5e2b7e=""><a href="jacascript:void(0)" data-v-dc5e2b7e="">Blog</a></li>
                <li className="menu-item" data-v-541744a1="" data-v-dc5e2b7e=""><a data-v-dc5e2b7e="">Learning Center</a></li>
                <li href="jacascript:void(0)" className="menu-item" data-v-541744a1="" data-v-dc5e2b7e=""><a href="jacascript:void(0)" data-v-dc5e2b7e="">Investor
                  Relations</a></li>
                <li className="menu-item" data-v-541744a1="" data-v-dc5e2b7e=""><a href="jacascript:void(0)" data-v-dc5e2b7e="">Contact Us</a></li>
                <li href="jacascript:void(0)" className="menu-item" data-v-541744a1="" data-v-dc5e2b7e=""><a href="jacascript:void(0)" data-v-dc5e2b7e="">Careers</a></li>
              </ul>
            </div>
          </div>
          <div id="navigation" role="navigation" className="row site-header__nav-wrapper" data-v-dc5e2b7e="">
            <div className="site-header__logo col-xl-3 col-lg-3 col-md-3 col-sm-5 col-5" data-v-dc5e2b7e=""><a href="jacascript:void(0)" className="router-link-active" data-v-dc5e2b7e="">
              <img src="../../../public/img/logo.png"
                width="320" height="53" data-v-dc5e2b7e="" alt="" /></a></div>
            {/* ant插件 */}
            <StickyContainer style={{ width: 'auto' }}>
              <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                <TabPane tab="PERSONAL" key="1">
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)#">
                      Checking <Icon type="down" />
                    </a>
                  </Dropdown>
                  <span style={{ paddingRight: '10px' }}></span>
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)">
                      Savings <Icon type="down" />
                    </a>
                  </Dropdown>
                  <span style={{ paddingRight: '10px' }}></span>
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)">
                      Investments <Icon type="down" />
                    </a>
                  </Dropdown>
                  <span style={{ paddingRight: '10px' }}></span>
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)">
                      Loans <Icon type="down" />
                    </a>
                  </Dropdown>
                  <span style={{ paddingRight: '10px' }}></span>
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)">
                      Mortgages <Icon type="down" />
                    </a>
                  </Dropdown>
                </TabPane>
                <TabPane tab="BUSINESS" key="2">
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)#">
                      Checking <Icon type="down" />
                    </a>
                  </Dropdown>

                </TabPane>
                <TabPane tab="TRUST ＆ WEALTH" key="3">
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)#">
                      Checking <Icon type="down" />
                    </a>
                  </Dropdown>
                </TabPane>
                <TabPane tab="LOCATIONS" key="4">
                  <Dropdown overlay={menu1}>
                    <a className="ant-dropdown-link" href="jacascript:void(0)">
                      Checking <Icon type="down" />
                    </a>
                  </Dropdown>
                </TabPane>
              </Tabs>
            </StickyContainer>,
            {/* ant插件 */}
          </div>
          <Carousel effect="fade">
    <div>
      <h3><div>Building Community One Relationship At a Time.<a data-v-541744a1="" href="jacascript:void(0)" testing="true" className="btn btn--primary" data-v-48bff600="" style={{textTransform:'uppercase'}}>
  Open An Account Online
</a></div></h3>
    </div>
  </Carousel>
    <div className="container-hero login-card" data-v-3646e638="" data-v-47d4be7d="">
    <div className="generic-card login" data-v-50280c9c="" data-v-3646e638="">
      <h4 data-v-50280c9c="" data-v-3646e638="">Online Banking Sign In</h4>
      <div className="row" data-v-50280c9c="" data-v-3646e638="">
        <div className="login-switcher-left login-switcher" style={{color:'#ffffff',backgroundColor:'#4D3157'}} data-v-50280c9c=""
          data-v-3646e638="">Personal</div> <a jhref="jacascript:void(0)" className="login-switcher-right login-switcher"
          data-v-541744a1="" data-v-3646e638="" data-v-50280c9c=""><span data-v-3646e638="">普通会员</span></a>
      </div>
      <div className="login-form text-center" data-v-50280c9c="" data-v-3646e638="">
      
          <div className="OZRK__input-container OZRK__input-container--has-icon" data-v-a1ef0c88="" data-v-3646e638=""
            data-v-50280c9c="">
            <div aria-hidden="true" className="OZRK__input-container__icon material-icons" data-v-a1ef0c88=""><img src="../../../public/img/user1.png" width="20" height="20" alt="" /></div>
            <label data-v-a1ef0c88="" data-v-3646e638="">Username</label> <input type="text"
              name="username" data-v-a1ef0c88="" data-v-3646e638="" />
          </div>
          <div data-v-a1ef0c88="" data-v-3646e638="" className="OZRK__input-container OZRK__input-container--has-icon"
            data-v-50280c9c="">
            <div data-v-a1ef0c88="" aria-hidden="true" className="OZRK__input-container__icon material-icons"><img src="../../../public/img/lock.png" width="20" height="20" alt="" /></div>
            <label data-v-3646e638="" data-v-a1ef0c88="">Password</label> <input placeholder="Password"
              data-v-3646e638="" data-v-a1ef0c88="" type="password" name="password"
              aria-label="Password" />

          </div> <button className="login-btn ozrk-button ozrk-button--standard" data-v-3646e638=""
            data-v-50280c9c="">Log In</button> <a data-v-3646e638="" data-v-50280c9c="" jhref="jacascript:void(0)"
            style={{marginRight: '8px'}}>Forgot Password?</a> | <a jhref="jacascript:void(0)"
            style={{marginLeft: '8px'}} data-v-50280c9c="" data-v-3646e638="">Enroll In Online Banking</a>
      </div>
  </div>
  </div>
        </div>

      </div>


    )
  }
}

export default Header