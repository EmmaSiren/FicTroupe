import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { Card, Button, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const[login, { error }] = useMutation(LOGIN_USER);

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await login({
        variables: {username: formState.username, password: formState.password},
      });
      const token = response.data.login.token;
      Auth.login(token);

      // Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }
  };

  // Update state based on input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    })
  };
  
  return (
    <div  className="testingbg" style={{ height: '98vh'}}>
      <h2 className="title">Login</h2>
      <Row id="middleAlign">
      <Card style={{ width: 300, paddingTop: '24px', background: '#211534'}} align="middle">
        <Form name="normal_login" className="login-form">
          <Form.Item name="username" rules={[{ required: true, message: 'You forgot your username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'You forgot your password!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Item>
          {error ? (
            <div>
              <p className="error-text">Wrong username or password</p>
            </div>
          ): null}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Link style={{fontFamily: "'Handlee', cursive", fontSize: '15px'}} to="/signup">Sign Up!</Link>
          </Form.Item>
        </Form>
      </Card>
    </Row>
    </div>
  );
}