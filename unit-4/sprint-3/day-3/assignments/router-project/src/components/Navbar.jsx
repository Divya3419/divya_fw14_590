import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
  <>
  <div>
      <marquee className={styles.ban}>Apply SHOPIFY30 and get 30% off</marquee>
        </div>
    <div className={styles.navbar}>
        <div className={styles.left}>
            <img src="https://adarna.co.za/wp-content/uploads/2020/04/shopify-logo-white.png" alt="" />
        
<Link className={styles.link} to="/start">Start</Link>
<Link className={styles.link} to ="/sell">Sell</Link>
<Link className={styles.link} to="/market">Market</Link>
<Link className={styles.link} to="/manage">Manage</Link>
        </div>
        <div></div>
        <div  className={styles.right}>

       <Link className={styles.link} to="/pricing">Pricing</Link>

      <Link className={styles.link} to="/learn">Learn</Link>

        <Link className={styles.link} to="/login">Login</Link>

        <button className={styles.btn} onClick={()=>{alert("welcome free trial")}}>Start free trial</button>

        <img src="https://image.shutterstock.com/image-vector/white-trolley-icon-vector-shopping-260nw-1866611092.jpg" alt="" />
        </div>
       
    </div>
    
    </>
  )
}

export default Navbar