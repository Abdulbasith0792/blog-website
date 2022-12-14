import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = (props) => {
  console.log(props)
  const [blog, setBlog] = useState(props.allBlogs);
  // useEffect(() => {
  //   console.log('Blog page')

  // }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>

          <h2>Latest Blogs</h2>


        </div>
        {blog.map((blogitem) => {
          return (
            <div key={blogitem.title} className={styles.bloggy}>
              <Link href={`/blogpost/${blogitem.slug} `}>
                <h3 className={styles.blogposth3}>{blogitem.title}</h3></Link>
                <Link href={`/blogpost/${blogitem.slug} `}><img src={blogitem.image} alt="" className={styles.imgs} /></Link>
              <p className={styles.blogpostp}>{blogitem.content.substr(0, 140)}</p>

            </div>)
        })}

      </main>
    </div>

  )
};

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()
  return {
    props: { allBlogs },// will be passed to the page component as props
  }
}

export default Blog;
