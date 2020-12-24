import React from 'react';
import { Row, Col, Typography, Input, Form, Checkbox, Button, Image, Tag, Card, Progress, Space } from "antd";
import './index.css';

const CourseRightSideBar = () => {
    return (
        <Col className="side-container">
            <Typography className="side-title">Sắp diễn ra</Typography>
            <Col className="side-card-box">
                <Row>
                    <Card className="side-card" bodyStyle={{padding: "0"}}>
                        <Image className="img" src="/course_img_4.svg"/>
                    </Card>
                    <Col className="content">
                        <Typography className="title">Phát triển Web</Typography>
                        <Row style={{marginTop: '10px'}}>
                            <Typography className="text-1">E-303</Typography>
                            <Typography className="text-2">12:00</Typography>
                        </Row>
                    </Col>
                    <Button type="link" style={{color: "#000"}} className="button">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                        </svg>
                    </Button>
                </Row>
                <Row style={{marginTop: '30px'}}>
                    <Card className="side-card" bodyStyle={{padding: "0"}} style={{background: '#FFF5EB'}}>
                        <Image className="img" src="/course_img_5.svg"/>
                    </Card>
                    <Col className="content">
                        <Typography className="title">Phát triển App</Typography>
                        <Row style={{marginTop: '10px'}}>
                            <Typography className="text-1">E-303</Typography>
                            <Typography className="text-2">12:00</Typography>
                        </Row>
                    </Col>
                    <Button type="link" style={{color: "#000"}} className="button">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                        </svg>
                    </Button>
                </Row>
                <Row style={{marginTop: '30px'}}>
                    <Card className="side-card" bodyStyle={{padding: "0"}} style={{background: '#EAFDEC'}}>
                        <Image className="img" src="/course_img_6.svg"/>
                    </Card>
                    <Col className="content">
                        <Typography className="title">Vật lý 1</Typography>
                        <Row style={{marginTop: '10px'}}>
                            <Typography className="text-1">E-303</Typography>
                            <Typography className="text-2">12:00</Typography>
                        </Row>
                    </Col>
                    <Button type="link" style={{color: "#000"}} className="button">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                        </svg>
                    </Button>
                </Row>
            </Col>
            <Typography className="side-title" style={{marginTop: '30px', marginBottom: '30px'}}>Công việc</Typography>
            <Card className="side-card-1" bodyStyle={{padding: "0"}}>
                <Row style={{height: '100%'}}>
                    <Image className="img" src="/course_img_4.svg"/>
                    <Col style={{marginTop: '40px', marginLeft: '35px'}}>
                        <Typography className="text-1">Đồ án giữa kỳ</Typography>
                        <Typography className="text-2">7 giờ 43 phút</Typography>
                    </Col>
                </Row>
            </Card>
            <Row style={{marginTop: '17px'}}>
                <Card className="side-card-2" bodyStyle={{padding: "0", alignItems: 'center', justifyContent: 'center'}} style={{marginRight: '9px', background: '#FFF5EB'}}>
                    <Image className="img" src="/course_img_4.svg"/>
                    <Typography className="text-1">Bài tập App 1</Typography>
                    <Typography className="text-2">7 giờ 43 phút</Typography>
                </Card>
                <Card className="side-card-2" bodyStyle={{padding: "0"}} style={{marginLeft: '9px', background: '#EAFDEC'}}>
                    <Image className="img" src="/course_img_4.svg"/>
                    <Typography className="text-1">Bài tập nhóm 1</Typography>
                    <Typography className="text-2">7 giờ 43 phút</Typography>
                </Card>
            </Row>
        </Col>
    )
}

export default CourseRightSideBar;
