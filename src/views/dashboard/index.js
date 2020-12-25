
import React from 'react';
import { Row, Col, Avatar, Image, Typography, Button, Calendar } from 'antd';
import './index.css'
import UpcomingClass from '../../components/upcoming-class/index';
import UpcomingTaskLarge from '../../components/upcoming-task-large/index'
import UpcomingTaskSmall from '../../components/upcoming-task-small/index'
import RightSidebar from '../../components/right-side-bar/index'

const { Title, Paragraph, Text } = Typography;

const Dashboard = () =>
{
    return (
        <>
            <Row style={{ marginBottom: '45px' }}>
                <Col span={12} >
                    <Image src='/main-event.svg' />
                </Col>
                <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                    <Title level={2} style={{ marginBottom: '25px' }}>Ngày hội việc làm</Title>
                    <h3 style={{ fontWeight: '400', marginBottom: '25px' }}>Cơ sở 1 - 07:30 - 06 tháng 11</h3>
                    <Row style={{ marginBottom: '25px' }}>
                        <Avatar size={64} style={{ marginRight: '25px' }} src='/big-avatar-1.svg' />
                        <Avatar size={64} style={{ marginRight: '25px' }} src='/big-avatar-2.svg' />
                    </Row>
                    <Paragraph style={{ marginBottom: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis tortor ut sapien.</Paragraph>
                    <Button type="primary" style={{ borderRadius: '20px', width: '90px' }}>Chi tiết</Button>
                </Col>
            </Row>
            <Row>
                <Col span={10}>
                    <Title level={4} style={{ marginBottom: '30px' }}>Sắp diễn ra</Title>
                    <UpcomingClass type="web" title="Phát triển Web" time="12:30" room="E-303" />
                    <UpcomingClass type="app" title="Phát triển App" time="12:30" room="E-303" />
                    <UpcomingClass type="physics" title="Vật lý 1" time="12:30" room="E-303" />
                </Col>
                <Col span={2} ></Col>
                <Col span={10}>
                    <Title level={4} style={{ marginBottom: '30px' }}>Sắp đến hạn</Title>
                    <UpcomingTaskLarge title="Đồ án giữa kỳ" />
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
        </>
    )
}

export default Dashboard;