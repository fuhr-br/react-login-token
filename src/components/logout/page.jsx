import React, { useContext } from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/auth'; 

const Logout = () => {
  const { logout } = useContext(AuthContext); 

  const handleLogout = () => {
    logout(); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Você está prestes a fazer logout</h1>
      <Button type="primary" danger icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;