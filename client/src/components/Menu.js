import React from 'react';
import Auth from "../utils/auth";
import { Link } from 'react-router-dom';
import { 
  MenuOutlined, 
  HomeOutlined, 
  IdcardOutlined, 
  LoginOutlined 
  } from '@ant-design/icons';
import { Menu } from 'antd';

export default function HamburgerMenu() {
  const items = [
    {
      label: 'Menu',
      key: 'Menu',
      icon: <MenuOutlined />,
      children: [
        {
          label: (
            <Menu.Item key="1">
              <HomeOutlined />
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
          ),
        },
        {
          label: (
            <Menu.Item key="2">
              <IdcardOutlined />
              <span>Dashboard</span>
              <Link to="/dashboard" />
            </Menu.Item>

          ),
        },
        {
          label: (
            <Menu.Item key="3">
              <LoginOutlined />
              <span>Logout</span>
              <Link to="/" />
            </Menu.Item>
          ),
        },
      ],
    },
  ];


    if(Auth.loggedIn()) {
      return (
        <Menu 
          className="menu"
          mode="horizontal"
          items={items}
        />
      )
    } return (
        <>
          <Link className="test" style={{paddingRight: '20px'}} to="/login">Login</Link>
          <Link className="test" style={{paddingLeft: '20px'}} to="/signup">Sign Up</Link>
        </>
    );

}