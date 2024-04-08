import React from 'react';
import styles from './Menu.module.css';

function Menu({Texto}) {
  return (
      <div className={styles.box}>{Texto}</div> 
  );
}
export default Menu;