import { Col, Row, Typography, Input, Button, Tabs, Divider, Image } from "antd";
import React from 'react';
import UpcomingTaskLarge from '../../components/upcoming-task-large/index';
import { SearchOutlined } from '@ant-design/icons';
import './index.css';

const { Title, Paragraph } = Typography;

const ClassroomDemoRightSidebar = () =>
{
    return (
        <Col className="side-container" style={{ padding: '30px 50px 120px 50px' }}>
            <Typography className="side-title">Công việc</Typography>
                <Row style={{marginTop:'30px'}} justify="space-between" align="middle" gutter={15}>
                    <Col span={16}>
                        <Input style={{ borderRadius: '20px', height: '42px' }} prefix={<SearchOutlined style={{ marginRight: '10px' }} />} placeholder='Tìm kiếm' />
                    </Col>
                    <Col span={8}>
                        <Button style={{width:'100%', background: '#f6f6f6', borderRadius: '20px', border: 'none' }}>Tên tăng dần</Button>
                    </Col>
                </Row>
            <Row gutter={16} justify="center" style={{ marginTop: '30px' }}>
               
                    <Tabs style={{width:'100%'}} centered size="large" tabBarGutter={45} defaultActiveKey="1" centered>
                        <Tabs.TabPane tab="Tất cả" key="1">
                            <Col style={{ marginTop: '15px' }}>
                                <Typography.Title style={{ fontSize: '16px', fontWeight: '300', marginBottom: '15px' }} >Sắp đến hạn</Typography.Title>
                                <UpcomingTaskLarge type="web" title="Đồ án giữa kỳ" />
                                <Divider type="horizontal" dashed />

                                <Row className="class-list-item" align="middle" justify="space-between">
                                    <Col>
                                        <Row>
                                            <Image src={'/slide-icon.svg'} />
                                            <Col className="class-list-item-col" style={{ marginLeft: '45px' }}>
                                                <Title style={{ fontSize: '18px', marginTop: '10px' }}>Bài giảng 1</Title>
                                                <Row align="middle">
                                                    <Paragraph style={{ fontSize: '16px', marginRight: '45px' }}>23 tháng 8</Paragraph>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Image src='/right-arrow.svg' />
                                    </Col>
                                </Row>
                                <Row className="class-list-item" align="middle" justify="space-between">
                                    <Col>
                                        <Row>
                                            <Image src={'/slide-icon.svg'} />
                                            <Col className="class-list-item-col" style={{ marginLeft: '45px' }}>
                                                <Title style={{ fontSize: '18px', marginTop: '10px' }}>Bài giảng 2</Title>
                                                <Row align="middle">
                                                    <Paragraph style={{ fontSize: '16px', marginRight: '45px' }}>30 tháng 8</Paragraph>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Image src='/right-arrow.svg' />
                                    </Col>
                                </Row>
                                <Row className="class-list-item" align="middle" justify="space-between">
                                    <Col>
                                        <Row>
                                            <Image src={'/homework-icon-2.svg'} />
                                            <Col className="class-list-item-col" style={{ marginLeft: '45px' }}>
                                                <Title style={{ fontSize: '18px', marginTop: '10px' }}>Bài tập 1</Title>
                                                <Row align="middle">
                                                    <Paragraph style={{ fontSize: '16px', marginRight: '45px' }}>06 tháng 9</Paragraph>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Image src='/right-arrow.svg' />
                                    </Col>
                                </Row>

                            </Col>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Tài liệu" key="2">
                            <Col style={{ marginTop: '15px' }}>
                                <Row className="class-list-item" align="middle" justify="space-between">
                                    <Col>
                                        <Row>
                                            <Image src={'/slide-icon.svg'} />
                                            <Col className="class-list-item-col" style={{ marginLeft: '45px' }}>
                                                <Title style={{ fontSize: '18px', marginTop: '10px' }}>Bài giảng 1</Title>
                                                <Row align="middle">
                                                    <Paragraph style={{ fontSize: '16px', marginRight: '45px' }}>23 tháng 8</Paragraph>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Image src='/right-arrow.svg' />
                                    </Col>
                                </Row>
                                <Row className="class-list-item" align="middle" justify="space-between">
                                    <Col>
                                        <Row>
                                            <Image src={'/slide-icon.svg'} />
                                            <Col className="class-list-item-col" style={{ marginLeft: '45px' }}>
                                                <Title style={{ fontSize: '18px', marginTop: '10px' }}>Bài giảng 2</Title>
                                                <Row align="middle">
                                                    <Paragraph style={{ fontSize: '16px', marginRight: '45px' }}>30 tháng 8</Paragraph>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Image src='/right-arrow.svg' />
                                    </Col>
                                </Row>
                                <Row className="class-list-item" align="middle" justify="space-between">
                                    <Col>
                                        <Row>
                                            <Image src={'/homework-icon-2.svg'} />
                                            <Col className="class-list-item-col" style={{ marginLeft: '45px' }}>
                                                <Title style={{ fontSize: '18px', marginTop: '10px' }}>Bài tập 1</Title>
                                                <Row align="middle">
                                                    <Paragraph style={{ fontSize: '16px', marginRight: '45px' }}>06 tháng 9</Paragraph>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Image src='/right-arrow.svg' />
                                    </Col>
                                </Row>

                            </Col>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Bài tập" key="3">
                            <Col style={{ marginTop: '15px' }}>
                                <Typography.Title style={{ fontSize: '16px', fontWeight: '300', marginBottom: '15px' }} >Sắp đến hạn</Typography.Title>
                                <UpcomingTaskLarge type="web" title="Đồ án giữa kỳ" />
                                <Divider type="horizontal" dashed />
                            </Col>
                        </Tabs.TabPane>
                    </Tabs>
              
            </Row>
        </Col >
    )
}

export default ClassroomDemoRightSidebar;
