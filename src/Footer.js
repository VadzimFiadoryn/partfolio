import React from 'react';
import styles from './footer.module.css';


function Footer() {
    return (

        <div className={styles.footer}>

            <div className={styles.contener}>

                <div className={styles.obertca}>
                    <div className={styles.probel}>
                        <span>my Name</span>
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
                    <div className={styles.probel}>
                        <span>копирайт</span>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}


export default Footer;
