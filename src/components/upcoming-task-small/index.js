

import React from 'react';
import { Row, Col, Avatar, Image, Typography, Button } from 'antd';
import './index.css'
const { Title, Paragraph } = Typography;

const UpcomingTaskSmall = (props) =>
{
    const background = props.type === 'app' ? '#FFF5EB' : '#EAFDEC';
    return (
        <div className="upcoming-task-small" style={{ backgroundColor: background, borderRadius: '20px', height: '144px' }} align='middle' justify="center">
            <Image src={"/" + props.type + "-icon-small.svg"} style={{ zIndex: -1 }} />
            <Title style={{ fontSize: '18px', marginTop: '-5px' }}>{props.title}</Title>
            <Paragraph style={{ fontSize: '16px' }}>7 giờ 43 phút</Paragraph>
        </div>
    );
}

export default UpcomingTaskSmall;