import { Layout } from 'antd';
import React from 'react';
import CustomHeader from '../CustomHeader/index';

const { Sider } = Layout;

function RightSidebar(props) {

  return (
    <div style={{ minHeight: '100vh', borderLeft: '0.5px solid #f0f0f0' }}>
          <CustomHeader />
          {props.children}
      </div>
  );
}

export default RightSidebar;
