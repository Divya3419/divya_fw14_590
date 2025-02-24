import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
const Navabar = () => {
  return (
    <div className={styles.nav}>
        <Link className={styles.link} to="/">All</Link>
        <Link className={styles.link} to="html">HTML</Link>
        <Link className={styles.link} to="/css">CSS</Link>
        <Link className={styles.link} to="javascript">Javascript</Link>
    </div>
  )
}

export default Navabar