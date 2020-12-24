
import React from 'react';
import { Row, Col, Image, Typography } from 'antd';

const { Title } = Typography;

const Dashboard = () =>
{
    return (
        <>
            <Row>
                <Col span={12} >
                    <Image src='/main-event.svg' />
                </Col>
                <Col span={12} >
                    <Title level={2}>Ngày hội việc làm</Title>
                    <h3 style={{ fontWeight: '400' }}>Cơ sở 1 - 07:30 - 06 tháng 11</h3>
                    <Row>
                        <Image style={{ marginRight: '25px' }} src='/big-avatar-1.svg' />
                        <Image src='/big-avatar-1.svg' />
                    </Row>
                </Col>
            </Row>
            <Row></Row>
        </>
    )
}

export default Dashboard;