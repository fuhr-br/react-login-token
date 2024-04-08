import React, { useContext } from 'react';
import styles from './Cabecalho.module.css';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.js';

function Cabecalho() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/home" className={styles.link}>
          <HomeOutlined />
        </Link>
      </div>
      {isAuthenticated() ? (
        <Link to="/logout">
          <button className={styles.loginBtn}>Deslogar</button>
        </Link>
      ) : (
        <Link to="/login">
          <button className={styles.loginBtn}>Login</button>
        </Link>
      )}
    </header>
  );
}

export default Cabecalho;
