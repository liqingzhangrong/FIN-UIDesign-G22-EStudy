

import React from 'react';
import { Row, Col, Avatar, Image, Typography, Button } from 'antd';
import './index.css'
const { Title, Paragraph } = Typography;

const UpcomingTaskLarge = (props) =>
{
    return (
        <Row className="upcoming-task-large" style={{ marginBottom: '17px', backgroundColor: '#E3F7FF', borderRadius: '20px' }} align='middle' justify="center">
            <Col style={{ marginLeft: '-25px' }}>
                <Image src="/web-icon-medium.svg" />
            </Col>
            <Col style={{ marginTop: '15px' }}>
                <Title style={{ fontSize: '18px' }}>{props.title}</Title>
                <Paragraph style={{ fontSize: '16px' }}>7 giờ 43 phút</Paragraph>
            </Col>
        </Row>
    );
}

export default UpcomingTaskLarge;