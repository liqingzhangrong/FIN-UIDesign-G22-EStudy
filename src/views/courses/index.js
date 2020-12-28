import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Image, Input, Progress, Row, Tag, Typography } from "antd";
import React from "react";
import "./index.css";
import { history } from '../../history'

const Courses = () =>
{
    return (
        <Col className="container" style={{ marginTop: '0px' }}>
            <Typography.Title level={1} className="title">Môn học</Typography.Title>
            <Row className="tag-box">
                <Button className="tag">
                    <Typography className="text">
                        2020
                    </Typography>
                </Button>
                <Button className="tag">
                    <Typography className="text">
                        Học kỳ 1
                    </Typography>
                </Button>
            </Row>
            <Col className="semi-title">
                <Typography className="title-semi">Thông báo</Typography>
                <Row style={{ marginTop: '30px' }} gutter={30} justify="center">
                    <Col span={8}>
                        <Card className="card-noti" style={{ background: '#E3F7FF' }}>
                            <Image src="/web-icon-small.svg" />
                            <Typography className="title">Thông báo 1</Typography>
                            <Typography className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="card-noti" style={{ background: '#FFF4EB' }}>
                            <Image src="/app-icon-small.svg" />
                            <Typography className="title">Thông báo 2</Typography>
                            <Typography className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="card-noti" style={{ background: '#EAFDEC' }}>
                            <Image src="/physics-icon-small.svg" />
                            <Typography className="title">Thông báo 3</Typography>
                            <Typography className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col className="semi-title">
                <Row style={{ }} justify="space-between" align="middle">
                    <Col>
                        <Typography className="title-semi">Đã đăng ký</Typography>
                    </Col>
                    <Col span={12}>
                        <Row justify="center" gutter={15} align="middle">
                            <Col span={16}>
                                <Input style={{ borderRadius: '20px', height: '42px' }} prefix={<SearchOutlined style={{ marginRight: '10px' }} />} placeholder='Tìm kiếm' />
                            </Col>
                            <Col span={8}>
                                <Button style={{width:'100%', background: '#f6f6f6', borderRadius: '20px', border: 'none' }}>Tên tăng dần</Button>
                            </Col>
                        </Row>
                    </Col>


                </Row>
                <Row style={{ marginTop: '30px' }} gutter={30} justify="center" align="middle">
                    <Col span={8} >
                        <Card className="card-1" style={{}} onClick={() => { history.push('/courses/web') }}>
                            <Image className="image-1" src="/course_img_4.svg" style={{ width: 230 }} />
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
                                <Progress percent={75} className="progress" />
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card className="card-1">
                            <Image className="image-1" src="/course_img_5.svg" style={{ width: 230 }} />
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
                                <Progress percent={50} className="progress" />
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card className="card-1">
                            <Image className="image-1" src="/course_img_6.svg" style={{ width: 230 }} />
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
                                <Progress percent={22} className="progress" />
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Col>
    )
}

export default Courses;