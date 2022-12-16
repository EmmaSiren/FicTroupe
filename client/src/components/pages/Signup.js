import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations'
import { Card, Button, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {xs: { span: 24 }, sm: { span: 8 }},
  wrapperCol: {xs: { span: 24 }, sm: { span: 16 }},
};
const tailFormItemLayout = {
  wrapperCol: {xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 }},
};

export default function Signup(props) {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [form] = Form.useForm();

  // const [validated] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: userFormData.username,
        email: userFormData.email,
        password: userFormData.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // const handleSumbit = async (event) => {
  //     event.preventDefault();

  //     const form = event.currentTarget;
  //     if (form.checkValid() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();

  //     }
  //     try {
  //         const response = await newUser(userFormData);
  //         if (!response.ok) {
  //             throw new Error('Wrong!');
  //         }
  //         const { user } = await response.json();
  //         console.log(user);
  //     } catch (err) {
  //         console.error(err);
  //     }
  //     setUserFormData({
  //         username: '',
  //         email: '',
  //         password: '',
  //     });
  // };

  return (
    <div>
    <h2 className="title">Sign Up</h2>
      <Row id="test2" justify="space-around">
        <Card style={{ width: 300, paddingTop: '24px' }} align="middle">

          <Form {...formItemLayout} form={form} name="register" onSubmit={handleFormSubmit}>

            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}>
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username" 
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
                onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password 
                prefix={<LockOutlined className="site-form-item-icon" />} 
                type="password" 
                placeholder="Password"
                onChange={handleInputChange} 
              />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item>
              Or <Link to="/login">Login</Link>
            </Form.Item>

          </Form>

        </Card>
      </Row>
    </div>
        // <>
        //     <Form noValidate validated={validated} onSubmit={handleSumbit}>
        //         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Something went wrong with your signup</Alert>
        //         <Form.Group>
        //             <Form.Label hmtlFor='username'>Username</Form.Label>
        //             <Form.Control
        //                 type='text'
        //                 placeholder='Your Username'
        //                 name='username'
        //                 onChange={handleInputChange}
        //                 value={userFormData.username}
        //                 required
        //             />
        //             <Form.Control.Feedback type='invalid'>Username is required</Form.Control.Feedback>
        //         </Form.Group>
        //         <Form.Group>
        //             <Form.Label htmlFor='email'>Email</Form.Label>
        //             <Form.Control
        //                 type='email'
        //                 placeholder='Eamil Address'
        //                 name='email'
        //                 onChange={handleInputChange}
        //                 value={userFormData.email}
        //                 required
        //             />
        //             <Form.Control.Feedback type='invalid'>Password is required</Form.Control.Feedback>

        //         </Form.Group>
        //         <Button
        //             disabled={!(userFormData.username &&
        //                 userFormData.email && userFormData.password)}
        //             type='sumbit'
        //             variant='Access Granted'>
        //             Submit
        //         </Button>
        //     </Form>
        // </>
  );
};