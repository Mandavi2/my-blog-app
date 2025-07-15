
import React from 'react'
import styles from './header.module.css'


const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
        <div className={styles.nav_wrapper}>
          <div className={styles.logo}>Blogger</div>
          <button className={styles.header_btn}>Get Started</button>
        </div>
       
    </div>
  )
}

export default Header