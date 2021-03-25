import styles from '../NavBar/NavBar.module.css';

import React from 'react';

import { Link, Routes } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.logo}>
                <div className={styles.leftSideLogo}>
                    <i className="fas fa-angle-left"></i>
                </div>

                <h4>Carlos<strong>Pires</strong></h4>

                <div className={styles.rightSideLogo}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
            <ul className={styles.navLinks}>
                <Routes>
                <li className={styles.links}><Link to="">Home</Link></li>
                <li className={styles.links}><Link to="/about">About</Link></li>
                <li className={styles.links}><Link to="/projects">Projects</Link></li>
                <li className={styles.links}><Link to="/contact">Contact me</Link></li>
                </Routes>
            </ul>
        </div>
    );
}