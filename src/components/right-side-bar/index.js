import { Layout } from 'antd';
import React from 'react';
import CustomHeader from '../CustomHeader/index';
import { Scrollbars } from 'react-custom-scrollbars';

const { Sider } = Layout;

function RightSidebar(props)
{

  return (
    <div style={{ height: '100vh', borderLeft: '0.5px solid #f0f0f0', width: '27vw' }}>
      <CustomHeader />
      <Scrollbars autoHide autoHideTimeout={0} autoHeightMin="100vh" autoHeightMax="100vh"  >
        {props.children}
      </Scrollbars>
    </div>
  );
}

export default RightSidebar;
