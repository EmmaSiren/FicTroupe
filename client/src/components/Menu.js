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
              <Link to="/"><HomeOutlined /> Home</Link>
            </Menu.Item>
          ),
        },
        {
          label: (
            <Menu.Item key="2">
              <Link to="/dashboard"><IdcardOutlined /> Dashboard</Link>
            </Menu.Item>

          ),
        },
        {
          label: (
            <Menu.Item key="3">
              <Link to="/" onClick={() => Auth.logout()}><LoginOutlined /> Logout</Link>
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
      );
    } else { 
      return (
        <>
          <Link className="loggedOut" style={{paddingRight: '20px'}} to="/login">Login</Link>
          <Link className="loggedOut" style={{paddingLeft: '20px'}} to="/signup">Sign Up</Link>
        </>
    );
    }

}