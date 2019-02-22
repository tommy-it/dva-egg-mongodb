import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header/Header';

function TrustPage() {
  return (
    <div>
    <Header/>
  </div>
  );
}

TrustPage.propTypes = {
};

export default connect()(TrustPage);
