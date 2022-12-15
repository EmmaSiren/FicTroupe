import React from 'react';
import { Card, Button, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Login () {
  return (
    <div>
    <h2 className="title">Login</h2>
    <Row id="middleAlign" >
      <Card style={{ width: 300, paddingTop: '24px' }} align="middle">
        <Form name="normal_login" className="login-form">
          <Form.Item name="username" rules={[{ required: true, message: 'You forgot your username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'You forgot your password!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            Or <a href="/signUp">Sign Up!</a>
          </Form.Item>
        </Form>
      </Card>
    </Row>
    </div>
  );
}