import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header/Header';

function LocationPage() {
  return (
    <div>
    <Header/>
  </div>
  );
}

LocationPage.propTypes = {
};

export default connect()(LocationPage);
