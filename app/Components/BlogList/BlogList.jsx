import React from 'react'
import styles from './bloglist.module.css'
import { blog_data } from '@/Assets/assets'
import BlogItem from '../BlogItem/BlogItem'



const BlogList = () => {
  return (
    <div>
        <div className={styles.categoryContainer}>
            <button className={styles.activeCatBtn}>All</button>
            <button className={styles.catBtn}>Technology</button>
            <button className={styles.catBtn}>Lifestyle</button>
            <button className={styles.catBtn}>Startup</button>
        </div>
        <div className={styles.blogListContainer}>
            {
                blog_data.map((item, index)=>{
                    return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category} />
                })
            }
        </div>
    </div>
  )
}

export default BlogList