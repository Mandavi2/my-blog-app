import React from 'react'
import styles from './blogitem.module.css'
import Image from 'next/image'
import { blog_data } from '@/Assets/assets'
import Link from 'next/link'



const BlogItem = ({title, description, category, image, id}) => {
  return (
    <div className={styles.blogCard}>
       <Link href={`/blogs/${id}`}>
          <Image src={image} alt='blog-image' className={styles.blog_image}/>
       </Link>
        <p className={styles.blogCategory}>{category}</p>
        <div className={styles.blogContent}>
            <h5>{title}</h5>
            <p>{description}</p>
            <Link href={`/blogs/${id}`} className={styles.readmoreBtn}>Read more...</Link>
        </div>
    </div>
  )
}

export default BlogItem