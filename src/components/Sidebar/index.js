import { Layout, Menu, Divider, Progress, Typography } from 'antd';
import
{
  CalendarOutlined,
  BookOutlined,
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,

} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../history'
import Scrollbars from 'react-custom-scrollbars';

const { Sider } = Layout;

function Sidebar(props)
{

  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(['sub1', 'sub2']);
  const rootKeys = ['sub1', 'sub2'];

  const onCollapse = () =>
  {
    let logo = document.querySelector('#sidebar-logo');
    if (collapsed)
    {
      logo.style.width = '100px';
      logo.style.height = '100px';
    }
    else
    {
      logo.style.width = '64px';
      logo.style.height = '64px';
    }
    setCollapsed(!collapsed);

  }

  useEffect(() =>
  {
    if (!collapsed)
    {
      setOpenKeys(rootKeys);
    }
  }, [collapsed]);

  const onOpenKeysChanged = (items) =>
  {
    console.log(items)
    const latestOpenKey = items.find(key => openKeys.indexOf(key) === -1);
    if (rootKeys.indexOf(latestOpenKey) === -1)
    {
      setOpenKeys(items);
    } else
    {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : rootKeys);
    }
  }

  return (
    <div style={{ minHeight: '100vh', padding: '0 0 10% 0' }}>
      <Sider className="sidebar" collapsible collapsed={collapsed} theme="light" width="15vw" onCollapse={onCollapse} style={{ minHeight: '100vh' }}>
       
        <Menu inlineIndent={24} onOpenChange={onOpenKeysChanged} className='sidebar-menu' theme="light" openKeys={openKeys} defaultOpenKeys={openKeys} defaultSelectedKeys={['1']} mode="inline">
          <Link to='/dashboard'>
            <img id="sidebar-logo" style={{ display: 'block', margin: 'auto', marginBottom: "32px", marginTop: '20px', transitionDuration: '200ms' }} src="/logo.svg" alt="logo" />
          </Link>
          <Menu.SubMenu key="sub1" title="Công việc" icon={collapsed ? <HomeOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} /> : ""}>
            <Menu.Item className='sidebar-item' key="1" onClick={() => { history.push('/dashboard') }} style={{ height: "50px", fontSize: '16px', margin: '15px 0px' }} icon={<HomeOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} />}>
              Tổng quan
            </Menu.Item>
            <Menu.Item key="2" onClick={() => { history.push('/courses') }} style={{ height: "50px", fontSize: '16px', margin: '15px 0px' }} icon={<BookOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} />}>
              Môn học
            </Menu.Item>
            <Menu.Item key="3" style={{ height: "50px", fontSize: '16px', margin: '15px 0px' }} icon={<CalendarOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} />}>
              Sự kiện
            </Menu.Item>
          </Menu.SubMenu>

          <Divider />

          <Menu.SubMenu key="sub2" title="Cá nhân" icon={collapsed ? <UserOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} /> : ""}>
            <Menu.Item key="4" style={{ height: "50px", fontSize: '16px', margin: '15px 0px' }} icon={<MessageOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} />}>
              Tin nhắn
            </Menu.Item>
            <Menu.Item key="5" style={{ height: "50px", fontSize: '16px', margin: '15px 0px' }} icon={<UserOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} />}>
              Tài khoản
            </Menu.Item>
            <Menu.Item key="6" style={{ height: "50px", fontSize: '16px', margin: '15px 0px' }} icon={<SettingOutlined className="sidebar-icons" style={{ marginRight: "30px", fontSize: '16px' }} />}>
              Cài đặt
            </Menu.Item>
          </Menu.SubMenu>
          <Divider />
        </Menu>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px', visibility: collapsed ? "hidden" : "visible" }}>
          <Progress type="circle" width={80} percent={75} />
          <Typography.Paragraph style={{ marginTop: '15px' }}>Nội dung đã hoàn thành</Typography.Paragraph>
        </div>
      </Sider>
    </div>
  );
}

export default Sidebar;
