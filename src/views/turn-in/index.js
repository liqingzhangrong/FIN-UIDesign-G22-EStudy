import React from "react";
import { Row, Col, Typography, Input, Form, Checkbox, Button, Image, Tag, Card, Progress, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "./index.css";

const TurnIn = () =>
{
    return (
        <Col className="container">
            <Row>
                <Card className="card-Class">
                    <Image className="image-Class" src="/course_img_4.svg" />
                </Card>

                <Col className="col-center-title">
                    <Typography className="title">Phát triển web</Typography>
                    <Row className="tag-box">
                        <Tag className="tag">
                            <Typography className="text">
                                Học kỳ 1
                            </Typography>
                        </Tag>
                        <Tag className="tag">
                            <Typography className="text">
                                2020
                            </Typography>
                        </Tag>
                    </Row>
                </Col>
            </Row>
            <Row className="row-center">
                <Col className="col-left" >
                    <Image className="image-Avt" src="/avt-1.svg" />
                    <Typography className="user-name">Nguyễn Văn A</Typography>
                    <Typography className="classwork-upload-date">16:30</Typography>
                    <Image className="image-Test" src="/test.svg" />
                </Col>
                <Col className="col-center-work" span={16}>
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
                    <Row style={{ marginTop: "30px" }}>
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