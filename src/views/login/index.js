import React from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Checkbox,
  Button,
  Image,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";
import {history} from '../../history';

const { Title } = Typography;
const Login = (props) => {
  const onFinish = (values) => {
    history.push('/dashboard');
  };

  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="limiter">
      <div className="content-container">
        <Row>
          <Col className="logo-content" span={13}>
            <Row className="header">
              <Image
                width={422}
                height={457}
                style={{ marginTop: "60px" }}
                src="/login-logo-box.svg"
              />
            </Row>
          </Col>
          <Col className="login-form" span={11}>
            <Row className="header">
              <Title level={2}>Đăng nhập</Title>
            </Row>
            <Row className="body">
              <Form
                name="loginform"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="username"
                  //   rules={[{ required: true, message: "not null" }]}
                >
                  <Input
                    style={{ marginTop: "5px" }}
                    className="input-field"
                    placeholder="Tên đăng nhập"
                    prefix={
                      <UserOutlined
                        style={{
                          marginRight: "20px",
                          marginLeft: "10px",
                          fontSize: "18px",
                        }}
                      />
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  //   rules={[{ required: true, message: "not null" }]}
                >
                  <Input.Password
                    className="input-field"
                    placeholder="Mật khẩu"
                    prefix={
                      <LockOutlined
                        style={{
                          marginRight: "20px",
                          marginLeft: "10px",
                          fontSize: "18px",
                        }}
                      />
                    }
                  />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="input-checkbox">Lưu người dùng</Checkbox>
                </Form.Item>
                <Row className="row-mid">
                  <Form.Item>
                    <Button
                      className="btnItem"
                      type="primary"
                      htmlType="submit"
                    >
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Row>
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
