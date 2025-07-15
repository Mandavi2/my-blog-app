import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.footerLogo}>BLOGNEST</div>
        <p className={styles.footerText}>All rights reserved. Copyright @blognest</p>
        <div>
            <Image src={assets.facebook_icon} alt='social-icon' width={40}/>
            <Image src={assets.twitter_icon} alt='social-icon' width={40}/>
            <Image src={assets.googleplus_icon} alt='social-icon' width={40}/>
        </div>
    </footer>
  )
}

export default Footer