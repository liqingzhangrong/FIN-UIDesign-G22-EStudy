import { Breadcrumb, Button, Card, Col, Image, Input, Row, Tag, Typography } from "antd";
import { HomeFilled } from '@ant-design/icons'
import React from "react";
import "./index.css";

const TurnIn = () =>
{
    return (
        <Col className="container" style={{ marginTop: '0px', position: 'relative' }}>
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
                <Breadcrumb.Item href="/courses/web">Phát triển Web</Breadcrumb.Item>
                <Breadcrumb.Item href="">Đồ án giữa kỳ</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="row-center" justify="space-between" gutter={45}>
                <Col span={4} className="col-left" >
                    <Image className="image-Avt" src="/avt-1.svg" />
                    <Typography className="user-name">Nguyễn Văn A</Typography>
                    <Typography className="classwork-upload-date">16:30</Typography>
                    <Image className="image-Test" src="/test.svg" />
                </Col>
                <Col className="col-center-work" span={20}>
                    <Typography className="classwork-title">Đồ án giữa kỳ</Typography>
                    <Row className="tag-box">
                        <Tag className="tag-classwork">
                            <Typography className="text">
                                23:55, 08-09-2020
                            </Typography>
                        </Tag>
                    </Row>
                    <Typography className="classwork-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Typography>
                    <Row>
                        <Col className="file-col">
                            <Image className="image-File" src="/file-2.svg" />
                            <Typography className="file-name">File1.pdf</Typography>
                        </Col>
                        <Col className="file-col">
                            <Image className="image-File" src="/file-2.svg" />
                            <Typography className="file-name">File2.pdf</Typography>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                        <Col className="col-comment-left" >
                            <Image className="image-Avt-comment" src="/avt-1.svg" />
                            <Typography className="user-name-comment">Nguyễn Văn A</Typography>
                            <Image className="image-Line" src="/line.svg" />
                        </Col>
                        <Col className="col-comment-right" flex="auto">
                            <Card className="card-Comment" >
                                <Typography className="classwork-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Typography>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                        <Col className="col-comment-left" >
                            <Image className="image-Avt-comment" src="/avt-1.svg" />
                            <Typography className="user-name-comment">Nguyễn Văn A</Typography>
                            <Image className="image-Line" src="/line.svg" />
                        </Col>
                        <Col className="col-comment-right" flex="auto">
                            <Card className="card-Comment" >
                                <Typography className="classwork-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Typography>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "30px" }} gutter={15}>
                        <Col className="col-comment-left" style={{ marginLeft: "30px" }}>
                            <Image className="image-add-comment" src="/add-comment.svg" />
                        </Col>
                        <Col className="col-comment-right" flex="auto">
                            <Input className="add-comment-input" placeholder="Viết bình luận"></Input>
                        </Col>
                        <Button className="submit-comment-button"><Image src="/Vector.svg" /></Button>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default TurnIn;