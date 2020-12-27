import React from 'react';
import { Row, Col, Typography, Input, Form, Checkbox, Button, Image, Tag, Card, Progress, Space } from "antd";
import './index.css';
import { history } from '../../history'

import UpcomingClass from '../../components/upcoming-class/index';
import UpcomingTaskLarge from '../../components/upcoming-task-large/index'
import UpcomingTaskSmall from '../../components/upcoming-task-small/index'

const CourseRightSideBar = () =>
{
    return (
        <Col className="side-container" style={{ padding: '30px 50px 90px 50px' }}>
            <Typography className="side-title">Sắp diễn ra</Typography>
            <Col className="side-card-box">
                <UpcomingClass type="web" title="Phát triển Web" time="12:30" room="E-303" />
                <UpcomingClass type="app" title="Phát triển App" time="12:30" room="E-303" />
                <UpcomingClass type="physics" title="Vật lý 1" time="12:30" room="E-303" />
            </Col>
            <Typography className="side-title" style={{ marginTop: '30px', marginBottom: '30px' }}>Công việc</Typography>
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
    )
}

export default CourseRightSideBar;
