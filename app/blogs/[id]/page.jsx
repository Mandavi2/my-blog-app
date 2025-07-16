'use client'

import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react'
import styles from './blogpage.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/Components/Footer/Footer';


const page = ({params}) => {
    const [data, setData] = useState(null);

    const fetchBlogData =()=>{
       for( let i=1; i<= blog_data.length; i++){
          if(Number(params.id) === blog_data[i].id){
             setData(blog_data[i]);
             console.log(blog_data[i])
             break;
          }
       }
    }
    useEffect(()=>{
        fetchBlogData();
    }, [])

  return (
    data ? <>
     <div>
        <div className={styles.blogpage_nav}>
           <Link href='/' className={styles.page_logo}>BlogNest</Link>
           <button className={styles.pageBtn}>Get Started</button>
        </div>
        <div className={styles.page_header}>
           <h1 className={styles.blog_heading}>{data.title}</h1>
           <Image className={styles.authorImage} src={data.author_img} alt='' height={60} width={60}/>
           <p className={styles.authorName}>{data.author}</p>
        </div>
        <div className={styles.imageConatiner}>
            <Image className={styles.blogpageImage} src={data.image} width={900} height={350} alt=''/>
        </div>
        <div className={styles.pageContent}>
            <h3 className={styles.contentTitle}>Introduction</h3>
            <p className={styles.description}>{data.description}</p>
            <h3 className={styles.contentTitle}>Step 1: Self-Reflection and Goal Setting</h3>
            <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt maxime culpa dolorum cumque ea, repellat ab distinctio aut! Nesciunt porro quae autem eius quos provident, aut cumque! Animi consequatur perferendis placeat, consectetur asperiores eaque. Quaerat beatae consequuntur quo nemo distinctio fugiat suscipit placeat tempora nostrum eius eum vitae reprehenderit harum iure, enim exercitationem ipsa itaque, optio est voluptates perferendis quidem quia.</p>

            <h3 className={styles.contentTitle}>Step 2: Self-Reflection and Goal Setting</h3>
            <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt maxime culpa dolorum cumque ea, repellat ab distinctio aut! Nesciunt porro quae autem eius quos provident, aut cumque! Animi consequatur perferendis placeat, consectetur asperiores eaque. Quaerat beatae consequuntur quo nemo distinctio fugiat suscipit placeat tempora nostrum eius eum vitae reprehenderit harum iure, enim exercitationem ipsa itaque, optio est voluptates perferendis quidem quia. Eos, labore vel adipisci, in rerum, unde ab fugiat voluptatibus corrupti doloribus nihil qui voluptate! Soluta dicta saepe officia, eos ad, cupiditate est corporis repellat aliquam ex deserunt tenetur?</p>

            <h3 className={styles.contentTitle}>Step 3: Self-Reflection and Goal Setting</h3>
            <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt maxime culpa dolorum cumque ea, repellat ab distinctio aut! Nesciunt porro quae autem eius quos provident, aut cumque! Animi consequatur perferendis placeat, consectetur asperiores eaque. Quaerat beatae consequuntur quo nemo distinctio fugiat suscipit placeat tempora nostrum eius eum vitae reprehenderit harum iure.</p>

            <h3 className={styles.contentTitle}>Conclusion</h3>
            <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt maxime culpa dolorum cumque ea, repellat ab distinctio aut! Nesciunt porro quae autem eius quos provident, aut cumque! Animi consequatur perferendis placeat, consectetur asperiores eaque.</p>

            <div className={styles.pageSocials}>
                <h3>Share this article on social media</h3>
                <div className={styles.socialsContainer}>
                     <Image src={assets.facebook_icon} alt='social' width={50}/>
                     <Image src={assets.twitter_icon} alt='social' width={50}/>
                     <Image src={assets.googleplus_icon} alt='social' width={50}/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </> : <></>
   
  )
}

export default page