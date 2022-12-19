import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

import { Card, Button, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Signup(props) {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [form] = Form.useForm();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await addUser({
      variables: {
        username: userFormData.username,
        email: userFormData.email,
        password: userFormData.password,
      },
    });
    const token = response.data.addUser.token;
    Auth.login(token);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  return (
    <div  className="testingbg" style={{ height: '98vh'}}>
    <h2 className="title">Sign Up</h2>
      <Row id="test2" justify="space-around">
        <Card style={{ width: 300, paddingTop: '24px', background: '#211534' }} align="middle">

          <Form form={form} name="register">

            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}>
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username" 
                name="username"
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item name="email"
              rules={[
                { type: 'email', message: 'The input is not valid E-mail!' },
                { required: true, message: 'Please input your E-mail!' }
              ]}
            >
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Email" 
                name="email"
                onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password 
                prefix={<LockOutlined className="site-form-item-icon" />} 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={handleInputChange} 
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="handleeButton" onClick={handleFormSubmit}>
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item>
              <Link style={{fontFamily: "'Handlee', cursive", fontSize: '17px'}} to="/login">Login</Link>
            </Form.Item>

          </Form>

        </Card>
      </Row>
    </div>      
  );
};