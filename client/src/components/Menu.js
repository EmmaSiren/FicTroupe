import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MenuOutlined, 
  HomeOutlined, 
  IdcardOutlined, 
  UserAddOutlined, 
  LoginOutlined 
  } from '@ant-design/icons';
import { Menu  } from 'antd';

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
              <Link as={Link} to="/" />
            </Menu.Item>
          ),
        },
        {
          label: (
            <Menu.Item key="2">
              <IdcardOutlined />
              <span>Dashboard</span>
              <Link as={Link} to="/dashboard" />
            </Menu.Item>

          ),
        },
        {
          label: (
            <Menu.Item key="3">
              <UserAddOutlined />
              <span>Create Character</span>
              <Link as={Link} to="/createcharacter" />
            </Menu.Item>
          ),
        },
        {
          label: (
            <Menu.Item key="3">
              <LoginOutlined />
              <span>Login</span>
              <Link as={Link} to="/login" />
            </Menu.Item>
          ),
        },
      ],
    },
  ];

  return (
    <Menu 
      className="menu" 
      mode="horizontal" 
      items={items}
    />
  );
}