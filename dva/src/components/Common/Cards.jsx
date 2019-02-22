import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;

class Cards extends Component {

  render() {
    return (
      <div style={{width:'9999',margin:0,height:'450px'}}>
      <Card
        hoverable
        style={{ width: 450,padding:30,border:0,float:"left"}}
        cover={<img alt="example" src="../../../public/img/personal/personal-featured__change-keeper.jpg" height='250' />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>



      <Card
        hoverable
        style={{ width: 450,padding:30,border:0,float:"left"}}
        cover={<img alt="example" src="./../../public/img/personal/personal-featured__mobile.jpg" height='250' />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>


      <Card
        hoverable
        style={{ width: 450,padding:30,border:0,float:"left"}}
        cover={<img alt="example" src="./../../public/img/personal/checking__cards.jpg" height='250' />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>

      </div>
    )
  }
}
  export default Cards