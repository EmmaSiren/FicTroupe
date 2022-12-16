import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Login (props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const[login, { error, data }] = useMutation(LOGIN_USER);

  // Update state based on input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    })
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }
  };

  // Clear the existing values
  // setFormState({
  //   email: '',
  //   password: '',
  // });


  return (
    <div>
    <h2 className="title">Login</h2>
    <Row id="middleAlign" >
      <Card style={{ width: 300, paddingTop: '24px' }} align="middle">
        <Form name="normal_login" className="login-form">
          <Form.Item name="username" rules={[{ required: true, message: 'You forgot your username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'You forgot your password!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            Or <Link to="/signup">Sign Up!</Link>
          </Form.Item>
        </Form>
      </Card>
    </Row>
    </div>
  );
}