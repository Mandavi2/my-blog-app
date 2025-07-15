import React from 'react'
import styles from './blogitem.module.css'
import Image from 'next/image'
import { blog_data } from '@/Assets/assets'



const BlogItem = ({title, description, category, image}) => {
  return (
    <div className={styles.blogCard}>
        <Image src={image} alt='blog-image' className={styles.blog_image}/>
        <p className={styles.blogCategory}>{category}</p>
        <div className={styles.blogContent}>
            <h5>{title}</h5>
            <p>{description}</p>
            <button className={styles.readmoreBtn}>Read more...</button>
        </div>
    </div>
  )
}

export default BlogItem