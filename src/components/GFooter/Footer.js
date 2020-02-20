import React from 'react';
import styles from './footer.module.css';


function Footer() {
    return (

        <div className={styles.footer}>

            <div className={styles.container}>
                <div>
                    <h2>my Name</h2>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxElement}>

                    </div>
                    <div className={styles.boxElement}>

                    </div>
                    <div className={styles.boxElement}>

                    </div>
                    <div className={styles.boxElement}>

                    </div>
                </div>
                <div>
                    <span>копирайт</span>
                </div>

            </div>
        </div>
    )
        ;
}


export default Footer;
