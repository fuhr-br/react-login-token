import React, { useState, useContext } from 'react';
import './login.css';
import api from '../../api.js';
import { Form, Input, Button, Typography, Divider, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/auth.js'; 

const { Title } = Typography;

const modalWarning = () => {
  Modal.warning({
    title: 'Erro ao tentar logar',
    content: 'Usuário não existe ou senha incorreta',
  });
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    api.post('/auth/login', {
      nome: username,
      senha: password
    })
      .then(response => {
        login(response.data.token); 
   
      })
      .catch(error => {
        modalWarning()
      });
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '94vh' }}>
      <div style={{ flex: 1 }}>
        <div className="login-container">
          <Title level={2} style={{ color: '#333' }}><UserOutlined style={{ paddingRight: '3%' }} />
            Login
          </Title>
          <Divider style={{ borderColor: '#ccc' }} />
          <Form onFinish={handleLogin}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Por favor, insira seu nome de usuário!' }]}
              help={!username ? 'Por favor, insira seu nome de usuário!' : null}
            >
              <Input prefix={<UserOutlined />} value={username} onChange={handleUsernameChange} className="espacamento" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
              help={!password ? 'Por favor, insira sua senha!' : null}
            >
              <Input.Password prefix={<LockOutlined />} value={password} onChange={handlePasswordChange} className="espacamento" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="espacamento">Login</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
