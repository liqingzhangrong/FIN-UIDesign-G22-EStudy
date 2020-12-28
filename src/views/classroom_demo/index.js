import { HomeFilled, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Button, Col, Image, Input, Modal, Row, Typography, Tabs } from "antd";
import React, { useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import Post from '../../components/Post/index';
import "./index.css";
const { TabPane } = Tabs;
const ClassroomDemo = () =>
{
    const [modalOpen, setModalOpen] = useState(false);
    const [postAdded, setPostAdded] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const handleAddPost = () =>
    {
        setPostAdded(true);
        setModalOpen(!modalOpen);
    }

    const toggleModal = () =>
    {
        setModalOpen(!modalOpen);
    }
    return (
        
            <Col className="container" style={{ marginTop: '0px', position: 'relative' }}>
                <Modal style={{ borderRadius: '20px' }} footer={[]} centered visible={modalOpen} onCancel={toggleModal} onOk={() => { setPostAdded(true); toggleModal() }}>
                    <Row style={{ marginTop: '15px' }} justify='center' align="middle">
                        <Typography.Title style={{ fontSize: "22px", fontWeight: '500', marginBottom: '15px' }}>Bài viết mới</Typography.Title>
                    </Row>
                    <Row justify='center' align="middle">
                        <Tabs tabBarGutter={45} defaultActiveKey="1">
                            <TabPane
                                tab={<span><Image style={{ width: '60px', height: '50px' }} src='/discussion-icon.png' />  Thảo luận</span>}
                                key="1"
                            >
                            </TabPane>
                            <TabPane
                                tab={<span><Image src='/homework-icon.svg' /> Tài nguyên</span>}
                                key="2">
                            </TabPane>
                        </Tabs>
                    </Row>
                    <Row justify='center' align="middle">
                        <Input onChange={(e) => { setPostTitle(e.target.value) }} value={postTitle} required bordered={false} style={{ marginBottom: '20px', marginTop: '10px', textAlign: 'center', fontSize: "22px", fontWeight: '500' }} placeholder="Tiêu đề" />
                    </Row>
                    <Row justify='center' style={{ height: '30vh', background: '#f0f0f0', borderRadius: '20px', padding: '20px', margin: '0px 20px' }}>
                        <Input.TextArea onChange={(e) => { setPostContent(e.target.value) }} value={postContent} bordered={false} style={{ borderRadius: '20px' }} required allowClear autoSize={{ minRows: 10, maxRows: 10 }} placeholder="Nội dung" rows={5} />
                    </Row>
                    <Row justify='center' align="middle" style={{ marginTop: '30px' }}>
                        <Button onClick={handleAddPost} type="primary" style={{ borderRadius: '20px' }} >Đăng bài</Button>
                    </Row>
                </Modal>
                <Button onClick={toggleModal} className="fab" shape="circle" style={{ position: 'fixed', width: '50px', height: '50px', bottom: '5vh', right: '60vh', zIndex: '999', boxShadow: '0px 7px 15px rgba(0,0,0,0.15)' }} type="primary"><PlusOutlined /></Button>
                <Row gutter={30}>
                    <Col>
                        <Image src='/course-icon.svg' />
                    </Col>
                    <Col>
                        <Typography.Title level={1} className="title">Phát triển Web</Typography.Title>
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
                    </Col>
                </Row>

                <Breadcrumb separator=">" style={{ marginTop: '45px' }}>
                    <Breadcrumb.Item href="/dashboard">
                        <HomeFilled />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/courses">Môn học</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Phát triển Web</Breadcrumb.Item>
                </Breadcrumb>

                <Col className="semi-title">
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Typography className="title-semi">Bài viết</Typography>
                        </Col>
                        <Col>
                            <Row justify="space-between" style={{ marginTop: '30px' }} gutter={15} align="middle">
                                <Col span={18}>
                                    <Input style={{ borderRadius: '20px', marginRight: '15px', height: '42px' }} prefix={<SearchOutlined style={{ marginRight: '10px' }} />} placeholder='Tìm kiếm' />
                                </Col>
                                <Col span={6}>
                                    <Button style={{ background: '#f6f6f6', borderRadius: '20px', border: 'none' }}>Tên tăng dần</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {postAdded ? <Post line="short" type="discussion" title={postTitle} content={postContent} time="Vừa xong" author="Trần Văn Y" avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' /> : ""}

                    <Post line="long" type="homework" title="Bài tập 1" time="12:30" author="Nguyễn Văn A" avatar="/big-avatar-1.svg" >
                        <Row style={{ marginTop: '25px' }} justify="space-between" gutter={15} >
                            <Col span="2">
                                <Row justify="center">
                                    <Avatar size={40} src="/avatar.jpg" />
                                </Row>
                                <Row justify="center" style={{ marginTop: '15px', marginBottom: '-15px' }}>
                                    <Image src={'/line-short.svg'} />
                                </Row>
                            </Col>
                            <Col span="22">
                                <Row>
                                    <Typography.Title style={{ fontSize: ' 16px', fontWeight: '500' }}>Nguyễn Văn C</Typography.Title>
                                </Row>
                                <Typography.Text style={{ fontSize: ' 16px', fontWeight: '300', marginTop: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typography.Text>
                            </Col>
                        </Row>
                    </Post>
                    <Post line="short" type="discussion" title="Thắc mắc 2" time="26 tháng 08" author="Nguyễn Thị B" avatar='/big-avatar-2.svg' />
                    <Post line="short" type="discussion" title="Thắc mắc 1" time="23 tháng 08" author="Trần Thị X" avatar="/big-avatar-2.svg" isLast={true} />

                </Col>

            </Col>

    )
}

export default ClassroomDemo;