import { Layout, Menu, Divider } from 'antd';
import {
  CalendarOutlined,
  BookOutlined,
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,

} from '@ant-design/icons';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {history} from '../../history'

const { Sider } = Layout;

function Sidebar(props) {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
     let logo = document.querySelector('#sidebar-logo');
     if(collapsed) {
        logo.style.width = '100px';
        logo.style.height = '100px';
     }
     else{
        logo.style.width = '64px';
        logo.style.height = '64px';
     }
    setCollapsed(!collapsed);
     
  }

  return (
    <div style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} theme="light" width="15vw"  onCollapse={onCollapse} style={{minHeight: '100vh'}}>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Link to='/'>
                <img id="sidebar-logo" style={{display: 'block', margin: 'auto', marginBottom: "32px", marginTop: '10px', transitionDuration: '200ms'}} src="logo.svg" alt="logo" />
            </Link>
            <Menu.Item key="1" onClick={() => {history.push('/dashboard')}} style={{height:"50px"}} icon={<HomeOutlined className="sidebar-icons" style={{marginRight: "30px"}} />}>
              Tổng quan
            </Menu.Item>
            <Menu.Item key="2" onClick={() => {history.push('/courses')}} style={{height:"50px"}} icon={<BookOutlined className="sidebar-icons" style={{marginRight: "30px"}} />}>
              Môn học
            </Menu.Item>
            <Menu.Item key="3" style={{height:"50px"}} icon={<CalendarOutlined className="sidebar-icons" style={{marginRight: "30px"}} />}>
              Sự kiện
            </Menu.Item>
            <Divider />
            <Menu.Item key="4" style={{height:"50px"}} icon={<MessageOutlined className="sidebar-icons" style={{marginRight: "30px"}} />}>
              Tin nhắn
            </Menu.Item>
            <Menu.Item key="5" style={{height:"50px"}} icon={<UserOutlined className="sidebar-icons" style={{marginRight: "30px"}} />}>
              Tài khoản
            </Menu.Item>
            <Menu.Item key="6" style={{height:"50px"}} icon={<SettingOutlined className="sidebar-icons" style={{marginRight: "30px"}} />}>
              Cài đặt
            </Menu.Item>
            <Menu.Item key="7" style={{height:"50px"}}>
              
            </Menu.Item>
            <Menu.Item key="8" style={{height:"50px"}}>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
  );
}

export default Sidebar;
