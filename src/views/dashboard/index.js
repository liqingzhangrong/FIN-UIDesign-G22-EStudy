
import React from 'react';
import { Row, Col, Avatar, Image, Typography, Button, Calendar } from 'antd';
import './index.css'
import UpcomingClass from '../../components/upcoming-class/index';
import UpcomingTaskLarge from '../../components/upcoming-task-large/index'
import UpcomingTaskSmall from '../../components/upcoming-task-small/index'

const { Title, Paragraph, Text } = Typography;

const Dashboard = () =>
{
    return (
        <div style={{ padding: '50px 50px' }}>
            <Typography.Title level={1} style={{ marginBottom: '45px', fontWeight: '500' }}>Tổng quan</Typography.Title>
            <Row style={{ marginBottom: '45px' }} gutter={16}>
                <Col span={12} >
                    <div style={{ background: '#E3F7FF', borderRadius: '20px', height: '350px', marginRight: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src='/main-event.svg' />
                    </div>
                </Col>
                <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                    <Title level={2} style={{ marginBottom: '25px' }}>Ngày hội việc làm</Title>
                    <h3 style={{ fontWeight: '400', marginBottom: '25px' }}>Cơ sở 1 - 07:30 - 06 tháng 11</h3>
                    <Row style={{ marginBottom: '25px' }}>
                        <Avatar size={64} style={{ marginRight: '25px' }} src='/big-avatar-1.svg' />
                        <Avatar size={64} style={{ marginRight: '25px' }} src='/big-avatar-2.svg' />
                    </Row>
                    <Paragraph style={{ marginBottom: '25px', fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Paragraph>
                    <Button type="primary" style={{ borderRadius: '20px', height: '40px', width: '100px' }}>Chi tiết</Button>
                </Col>
            </Row>
            <Row gutter={8} justify="space-between">
                <Col span={12}>
                    <Title level={4} style={{ marginBottom: '30px', fontSize: '22px' }}>Sắp diễn ra</Title>
                    <UpcomingClass location="dashboard" type="web" title="Phát triển Web" time="12:30" room="E-303" />
                    <UpcomingClass location="dashboard" type="app" title="Phát triển App" time="12:30" room="E-303" />
                    <UpcomingClass location="dashboard" type="physics" title="Vật lý 1" time="12:30" room="E-303" />
                </Col>
                <Col span={12}>
                    <Title level={4} style={{ marginBottom: '30px', fontSize: '22px' }}>Sắp đến hạn</Title>
                    <UpcomingTaskLarge type="web" title="Đồ án giữa kỳ" />
                    <Row gutter={16} style={{ marginBottom: '17px' }}>
                        <Col span={12}>
                            <UpcomingTaskSmall type='app' title="Bài tập App 1" />
                        </Col>
                        <Col span={12}>
                            <UpcomingTaskSmall type='physics' title="Bài tập nhóm 1" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;