import React from 'react'
import styles from './Navbar.module.css';
const Footer = () => {
  return (
<div className={styles.down}>
    <div className={styles.part1}>
<p>About</p>
<p>Careers</p>
<p>Press and Media</p>
<p>Shopify Plus</p>
<p>Sitemap</p>
    </div>
    <div>

    </div>

    <div className={styles.footer}>
        <div className={styles.icon}>
      <a href="https://www.facebook.com/shopify"><img src="https://cdn.icon-icons.com/icons2/2566/PNG/512/facebook_icon_153518.png" alt="logo" /></a> 

      <a href="https://twitter.com/shopify"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" alt="" /></a>

      <a href="https://www.youtube.com/user/shopify"><img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" alt="" /></a>

      <a href="https://www.instagram.com/shopify/"><img src="https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png" alt="" /></a>


      <a href="https://www.linkedin.com/company/shopify"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="" /></a>     

        </div>
        <div></div>
        <div className={styles.term}>
            <p>Terms of Service </p>
            <p>Privacy Policy </p>
        </div>
    </div>
    </div>
  )
}

export default Footer