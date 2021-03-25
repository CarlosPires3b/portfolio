import React from 'react';

import styles from '../About/About.module.css';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.myPicture}>
            </div>
            <div className={styles.myInformation}>
                <h3>Quem sou eu?</h3>
                <p>Alguma coisa sobre mim.
                </p>
            </div>
        </div>
    );
}