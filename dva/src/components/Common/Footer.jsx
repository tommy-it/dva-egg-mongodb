import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';


class Footer extends Component {

  render() {
    return (
      <div style={{ background: '#4d3157', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="" bordered={false} style={{ background: '#4d3157' }}>
              <img src="../../../public/img/ozk-white-logo.svg" alt="" />
              <ul style={{ color: '#fff', listStyle: 'none' }}>
                <br />
                <li>info@ozk.com</li>
                <li>1-800-274-4482</li>
                <li>International Toll-Free: 1-833-405-6071</li>
                <li>P.O. Box 8811</li>
                <li>Little Rock, AR 72231</li>
                <li>Routing Number: 082907273</li>
              </ul>
            </Card>
          </Col>
          <Col span={8} style={{ width: 250 }}>
            <Card title="" bordered={false} bodyStyle={{ background: '#4d3157' }}>

              <ul style={{ color: '#fff', listStyle: 'none', padding: 0, margin: 0, width: 180, whiteSpace: 'nowrap' }}>
                <li><p style={{fontSize:20,fontWeight:900}}>Company</p></li>
                <li>About</li>
                <li>Community</li>
                <li>Careers</li>
                <li>Corporate Blog</li>
                <li>Money Habits</li>
                <li>Business Aviation Specialty Group</li>
                <li>Innovation Labs</li>
              </ul>
            </Card>
          </Col>
          <Col span={8} style={{ width: 200 }}>
            <Card title="" bordered={false} bodyStyle={{ background: '#4d3157' }}>

              <ul style={{ color: '#fff', listStyle: 'none', padding: 0, margin: 0, width: 180, whiteSpace: 'nowrap' }}>
                <li><p style={{fontSize:20,fontWeight:900}}>Products</p></li>
                <li>Personal Checking</li>
                <li>Custom Debit Cards</li>
                <li>Business Checking</li>
                <li>Trust Services</li>
                <li>Wealth Management</li>
                <li>Credit Card Account Access</li>
              </ul>
            </Card>


          </Col>
          <Col span={8} style={{ width: 250 }}>
            <Card title="" bordered={false} bodyStyle={{ background: '#4d3157' }}>

              <ul style={{ color: '#fff', listStyle: 'none', padding: 0, margin: 0, width: 180, whiteSpace: 'nowrap' }}>
                <li><p style={{fontSize:20,fontWeight:900}}>Support</p></li>
                <li>Contact Us </li>
                <li>Lost Card?  </li>
                <li>Mobile ＆ Online Banking</li>
                <li>Online Security</li>
                <li>Reorder Checks</li>
              </ul>
            </Card>
          </Col>
          <Col span={8} style={{ width: 250, float: 'right' }}>
            <Card title="" bordered={false} bodyStyle={{ background: '#4d3157' }}>

              <ul style={{ color: '#fff', listStyle: 'none', padding: 0, margin: 0, width: 180, whiteSpace: 'nowrap', textAlign: 'right' }}>
                <li><p style={{fontSize:20,fontWeight:900}}>Follow Us</p></li>
                <li><img src="../../../public/img/footer/facebook.svg" alt="" /><img src="../../../public/img/footer/in.svg" alt="" /><img src="../../../public/img/footer/ins.svg" alt="" /><img src="../../../public/img/footer/twitter.svg" alt="" /></li>
                <li><img src="../../../public/img/footer/EHL_FDIC.svg" alt="" width='100' height='100' /></li>
                <li>Money Habits</li>
                <li>Business Aviation Specialty Group</li>
                <li>Innovation Labs</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Footer