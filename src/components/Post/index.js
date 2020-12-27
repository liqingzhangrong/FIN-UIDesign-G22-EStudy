import { SendOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Image, Input, Row, Tag, Typography } from "antd";
import React from "react";
import "./index.css";


const Post = (props) =>
{
    return (
        <Row className="post" style={{ marginTop: '30px' }} justify={"space-between"} gutter={30}>
            <Col span={4}>
                <Row justify="center" align="middle">
                    <Avatar size={60} src={props.avatar} />
                </Row>
                <Row style={{ marginTop: '10px' }} justify="center" align="middle">
                    <Typography.Text style={{ fontSize: "16px", fontWeight: '500' }}>{props.author}</Typography.Text>
                </Row>
                <Row style={{ marginTop: '10px' }} justify="center" align="middle">
                    <Typography.Text style={{ fontSize: "16px", fontWeight: '300' }}>{props.time}</Typography.Text>
                </Row>
                <Row style={{ marginTop: '10px' }} justify="center" align="middle">
                    <Image className={props.type === 'homework' ? '' : 'icon-large'} src={'/' + props.type + '-icon.' + (props.type === 'homework' ? 'svg' : 'png')} />
                </Row>
                {props.isLast ? "" : <Row style={{ marginTop: '15px', marginBottom: '-15px' }} justify="center" align="middle">
                    <Image src={'/line-' + props.line + '.svg'} />
                </Row>}
            </Col>
            <Col span={20}>
                <Row style={{}} align="middle">
                    <Typography.Title style={{ fontSize: "22px", fontWeight: '500' }}>{props.title}</Typography.Title>
                </Row>
                {props.type === "homework" ? <Row style={{}} align="middle">
                    <Tag className="tag">
                        <Typography className="text">23:55, 08-09-2020</Typography>
                    </Tag>
                </Row> : ""}
                <Row style={{ marginTop: '15px' }} align="middle">
                    <Typography.Paragraph style={{ fontSize: "16px", fontWeight: '300' }}>{props.content ? props.content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}</Typography.Paragraph>
                </Row>
                {props.type === "homework" ? <Row style={{ marginTop: '15px' }} align="middle">
                    <Image src='/file.svg' />
                </Row> : ""}
                {props.children}
                <Row style={{ marginTop: '30px' }} align="middle" gutter={15} justify="space-between">
                    <Col span={2}>
                        <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Col>
                    <Col span={20}>
                        <Input style={{ borderRadius: '20px' }} placeholder="Viết bình luận" />
                    </Col>
                    <Col span={2}>
                        <Button style={{ borderRadius: '20px', backgroundColor: '#DFF2FC', border: 'none' }} icon={<SendOutlined />} />
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}

export default Post;