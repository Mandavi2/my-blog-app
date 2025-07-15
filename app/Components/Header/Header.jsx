
import React from 'react'
import styles from './header.module.css'


const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
        <div className={styles.nav_wrapper}>
          <div className={styles.logo}>BLOGNEST</div>
          <button className={styles.header_btn}>Get Started</button>
        </div>
        <div className={styles.Heading_section}>
           <h1 className={styles.Heading_title}>Discover the Latest Blogs</h1>
           <p className={styles.Heading_desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ad commodi molestias tempore nam id ratione nemo vitae deleniti sapiente sit?</p>
           <form action="">
            <input type="email" placeholder='Enter your email'/>
            <button>Subscribe</button>
           </form>
        </div>
    </div>
  )
}

export default Header