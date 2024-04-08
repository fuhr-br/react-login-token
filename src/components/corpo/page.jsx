import React from 'react';
import styles from './Corpo.module.css';
import Menu from "../menu/page.jsx";

function Corpo() {
  return (
    <main className={styles.main}>
      <Menu Texto='Ola mundo '></Menu>
    </main>
  );
}

export default Corpo;
