import React,{ Component } from 'react';
import { Tabs, Menu, Dropdown, Icon, message} from 'antd';
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


  toPage(page){
    
    console.log(page)
    let pages={
      '1':'#/personal',
      '2':'#/business',
      '3':'#/trust',
      '4':'#/location'
    }
    window.location.href=pages[page]
    
    
  }
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
                <li href="jacascript:void(0)" className="menu-item" data-v-541744a1="" data-v-dc5e2b7e=""><a href="jacascript:void(0)" data-v-dc5e2b7e="">Sing Up</a></li>
              </ul>
            </div>
          </div>
          <div id="navigation" role="navigation" className="row site-header__nav-wrapper" data-v-dc5e2b7e="">
            <div className="site-header__logo col-xl-3 col-lg-3 col-md-3 col-sm-5 col-5" data-v-dc5e2b7e=""><a href="jacascript:void(0)" className="router-link-active" data-v-dc5e2b7e="">
              <img src="../../../public/img/logo.png"
                width="320" height="53" data-v-dc5e2b7e="" alt="" /></a></div>
            {/* ant插件 */}
            <StickyContainer style={{ width: 'auto' }}>
              <Tabs defaultActiveKey='{this.page}' renderTabBar={renderTabBar} onChange={this.toPage} >
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
            </StickyContainer>
            {/* ant插件 */}
          </div>
      </div>
  </div>
    )
  }
}

export default Header