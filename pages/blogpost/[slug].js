import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import Link from 'next/link'

const slug = (props) => {
  const [blogpost, setBlogpost] = useState(props.myBlog)

  // const router = useRouter();
 
  // useEffect(() => {
  //   if (!router.isReady) return;
// this was the frontend part of the code
  //   console.log('Blog page')
  //  .then((a) => {
  //     return a.json()
  //   })
  //     .then((parsed) => {
  //       console.log(parsed)
  //       setBlogpost(parsed)
  //     })
  // }, [router.isReady])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h1>{blogpost && blogpost.title}</h1>
          <hr />
          <p>{blogpost && blogpost.content}</p>
        </div>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
    props: { myBlog },// will be passed to the page component as props
  }
}

export default slug
