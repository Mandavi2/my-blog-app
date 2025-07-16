'use client'
import React, { useState } from 'react'
import styles from './bloglist.module.css'
import { blog_data } from '@/Assets/assets'
import BlogItem from '../BlogItem/BlogItem'



const BlogList = () => {
    const [menu, setMenu] = useState("All");
  return (
    <div>
        <div className={styles.categoryContainer}>
            <button onClick={()=> setMenu('All')} className={menu === 'All'? styles.activeCatBtn : styles.catBtn}>All</button>
            <button onClick={()=> setMenu('Technology')} className={menu === 'Technology'? styles.activeCatBtn : styles.catBtn}>Technology</button>
            <button onClick={()=> setMenu('Lifestyle')} className={menu === 'Lifestyle'? styles.activeCatBtn : styles.catBtn}>Lifestyle</button>
            <button onClick={()=> setMenu('Startup')} className={menu === 'Startup'? styles.activeCatBtn : styles.catBtn}>Startup</button>
        </div>
        <div className={styles.blogListContainer}>
            {
                blog_data.filter((item)=> menu=== 'All'? true : item.category === menu).map((item, index)=>{
                    return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                })
            }
        </div>
    </div>
  )
}

export default BlogList