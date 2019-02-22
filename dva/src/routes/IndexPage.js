import React from 'react';
import { connect } from 'dva';

import Header from '../components/Header/Header.jsx';
import Carousel from '../components/Common/Carousel.jsx';
import Sign from '../components/Common/Sign.jsx';
import Cards from '../components/Common/Cards.jsx';
import Content from '../components/Common/Content.jsx';
import Footer from '../components/Common/Footer.jsx';
function IndexPage() {
  return (
    <div>
    <Header page='1'/>
    <Carousel/>
    <Sign/>
    <Cards/>
    <Content/>
    <Footer/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
