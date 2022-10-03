import React from 'react'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
       <nav className={styles.navbar}>
        <ul>
          <li> <Link href="/">Home </Link></li>
          <li><Link href="/about">About </Link></li>
          <li><Link href="/blog">Blog </Link></li>
          <li>Contact</li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
