import { Calendar, Col, Image, Row, Tag, Typography, Avatar, Tooltip } from "antd";
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import React from 'react';
import UpcomingTaskLarge from '../../components/upcoming-task-large/index';
import './index.css';


const DashboardRightSideBar = () =>
{
    return (
        <Col style={{ padding: '30px 50px 120px 50px' }}>
            <Typography className="side-title">Lịch biểu</Typography>
            <Col className="side-card-box">
                <Calendar fullscreen={false} headerRender={() => { return (<></>) }} />
            </Col>
            <Row justify="space-between">

                <Typography className="side-title" style={{ marginTop: '30px', marginBottom: '30px' }}>Thứ 3</Typography>
                <Typography style={{ marginTop: '30px', marginBottom: '30px', fontSize: '22px' }}>23 tháng 8</Typography>
            </Row>
            <UpcomingTaskLarge type="web" title="Đồ án tìm hiểu" />
            <Row className='event-card' gutter={16} style={{}} justify="space-between" align="middle">
                <Row gutter={45} align="middle">
                    <Col>
                        <Image src='/event.svg' />
                    </Col>
                    <Col>
                        <Typography.Title style={{ fontSize: '18px', }}>Hội thảo ABC</Typography.Title>
                        <Typography.Paragraph style={{ fontSize: '16px' }}>07:00 - 29 tháng 6</Typography.Paragraph>
                        <Tag color="#EAFDEC" style={{ borderRadius: '20px', fontSize: '16px', color: 'black', padding: '5px 15px' }}>Học tập</Tag>
                        <Row style={{ marginTop: '15px' }}>
                            <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                </Tooltip>
                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                            </Avatar.Group>
                        </Row>

                    </Col>
                </Row>

                <Col>
                    <Image src='/right-arrow.svg' />
                </Col>
            </Row>
            
        </Col>
    )
}

export default DashboardRightSideBar;
