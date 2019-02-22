import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header/Header';
import EditableCell from '../components/Business/businessdata';
import Carousel from '../components/Common/Carousel.jsx';
import Sign from '../components/Common/Sign.jsx';
function BusinessPage() {
  return (
    <div>
      <Header page='2'/>
      <Carousel/>
      <Sign/>
      <EditableCell/>
    </div>
  );
}

BusinessPage.propTypes = {
};

export default connect()(BusinessPage);
