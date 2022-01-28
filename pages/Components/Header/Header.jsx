import React from 'react';
import styles from '../../../styles/Components/Header.module.css'
import { BsSearch } from 'react-icons/bs'


function Header() {
  return <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1643407661/logo_e8ogjb.png" alt="" />
        </div>
        <div className={styles.searchBar}>
          <form action="">
            <BsSearch className={styles.searchIcon} />
            <input type="text" placeholder='Search free high-resolution photos'/>
          </form>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li className={styles.links}>Home</li>
            <li className={styles.links}>Advertise</li>
            <li className={styles.links}>Blog</li>
          </ul>
        </div>
      </div>

  </div>;
}

export default Header;
