import React from "react";
import { Row, Col, Typography, Input, Form, Checkbox, Button, Image, Tag, Card, Progress, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "./index.css";

const Courses = () => {
    return (
        <Col className="container">
            <Typography className="title">Môn học</Typography>
            <Row className="tag-box">
                <Tag className="tag">
                    <Typography className="text">
                        2020
                    </Typography>
                </Tag>
                <Tag className="tag">
                    <Typography className="text">
                        Học kỳ 1
                    </Typography>
                </Tag>
            </Row>
            <Col className="semi-title">
                <Typography className="title-semi">Thông báo</Typography>
                <Row style={{marginTop: '30px'}}>
                    <Space size={30}>
                        <Card hoverable className="card" style={{background: '#E3F7FF'}}>
                            <Image className="image-1" src="/course_img_1.svg"/>
                            <Typography className="title">Thông báo 1</Typography>
                            <Typography className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        </Card>
                        <Card hoverable className="card" style={{background: '#FFF4EB'}}>
                            <Image className="image-1" src="/course_img_2.svg"/>
                            <Typography className="title">Thông báo 2</Typography>
                            <Typography className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        </Card>
                        <Card hoverable className="card" style={{background: '#F7EFFF'}}>
                            <Image className="image-1" src="/course_img_3.svg"/>
                            <Typography className="title">Thông báo 3</Typography>
                            <Typography className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        </Card>
                    </Space>
                </Row>
            </Col>
            <Col className="semi-title">
                <Row style={{width: '100%'}}>
                    <Typography className="title-semi">Đã đăng ký</Typography>
                    <Input style={{ borderRadius: '20px', width: '225px', marginRight: '15px', marginLeft: '430px'}} prefix={<SearchOutlined style={{ marginRight: '10px' }} />} placeholder='Tìm kiếm' />
                    <Button style={{background: '#F6F6F6', borderRadius: '20px'}}>Tên tăng dần</Button>
                </Row>
                <Row style={{marginTop: '30px'}} vgutter={30}>
                    <Space size={30}>
                        <Card hoverable className="card-1" style={{}}>
                            <Image className="image-1" src="/course_img_4.svg" style={{width: 230}}/>
                            <Typography className="title">Phát triển Web</Typography>
                            <Row className="tag-box">
                                <Tag className="tag">
                                    <Typography className="text">
                                        E-303
                                    </Typography>
                                </Tag>
                                <Tag className="tag">
                                    <Typography className="text">
                                        12:00
                                    </Typography>
                                </Tag>
                            </Row>
                            <Row className="progress-box">
                                <Progress percent={75} className="progress"/>
                            </Row>
                        </Card>
                        <Card hoverable className="card-1">
                            <Image className="image-1" src="/course_img_5.svg" style={{width: 230}}/>
                            <Typography className="title">Phát triển App</Typography>
                            <Row className="tag-box">
                                <Tag className="tag">
                                    <Typography className="text">
                                        E-303
                                    </Typography>
                                </Tag>
                                <Tag className="tag">
                                    <Typography className="text">
                                        12:00
                                    </Typography>
                                </Tag>
                            </Row>
                            <Row className="progress-box">
                                <Progress percent={50} className="progress"/>
                            </Row>
                        </Card>
                        <Card hoverable className="card-1">
                            <Image className="image-1" src="/course_img_6.svg" style={{width: 230}}/>
                            <Typography className="title">Vật lý 1</Typography>
                            <Row className="tag-box">
                                <Tag className="tag">
                                    <Typography className="text">
                                        E-303
                                    </Typography>
                                </Tag>
                                <Tag className="tag">
                                    <Typography className="text">
                                        12:00
                                    </Typography>
                                </Tag>
                            </Row>
                            <Row className="progress-box">
                                <Progress percent={22} className="progress"/>
                            </Row>
                        </Card>
                    </Space>
                </Row>
            </Col>
        </Col>
    )
}

export default Courses;