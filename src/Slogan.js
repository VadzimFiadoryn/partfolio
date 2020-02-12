import React from 'react';
import styles from './slogan.module.css';


function Slogan() {
    return (

        <div className={styles.slogan}>

            <div className={styles.centere}>
                <div className={styles.slogan2}>
                    Slogan
                </div>
                <div className={styles.form}>
                    <form >
                        <button >
                            нажать
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
}


export default Slogan;
