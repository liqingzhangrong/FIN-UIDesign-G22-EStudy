import React from "react";
import { Row, Col, Typography, Input, Form, Checkbox, Button, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Sally from "./../../sally.svg";
import "./index.css";

const { Title } = Typography;
const Login = () => {
  return (
    <div className="limiter">
      <div className="content-container">
        <Row>
          <Col className="logo-content" span={13}>
            <Row className="header">
              <Title level={1}>e</Title>
              <span>
                <Title level={1} style={{ color: "#0052CC" }}>
                  Study
                </Title>
              </span>
              <Title level={4}>Lorem ipsum, dolor sit amet.</Title>
            </Row>
            <Row className="body">
              <Image width={400} height={300}
              style={{marginTop: "-50px", marginLeft: "-20px"}}
              src="./../../sally.svg" />
            </Row>
          </Col>
          <Col className="login-form" span={11}>
            <Row className="header">
              <Title level={2}>Đăng nhập</Title>
            </Row>
            <Row className="body">
              <Form name="loginform">
                <Form.Item
                  name="username"
                  //   rules={[{ required: true, message: "not null" }]}
                >
                  <Input
                    className="input-field"
                    size="default size"
                    placeholder="Tên đăng nhập"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  //   rules={[{ required: true, message: "not null" }]}
                >
                  <Input.Password
                    className="input-field"
                    size="default size"
                    placeholder="Mật khẩu"
                    prefix={<LockOutlined />}
                  />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="input-checkbox">Lưu người dùng</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button className="btnItem" type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </Row>
            <Row className="footer">
              <p>
                Quên mật khẩu?
                <a className="recover" href="">
                  {" "}
                  Khôi phục
                </a>
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
