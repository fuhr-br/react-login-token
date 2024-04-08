import React from 'react';
import styles from './Rodape.module.css';

function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItem}>Footer 1</div>
      <div className={styles.footerItem}>Footer 2</div>
      <div className={styles.footerItem}>Footer 3</div>
    </footer>
  );
}

export default Rodape;