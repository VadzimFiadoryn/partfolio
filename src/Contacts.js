import React from 'react';
import styles from './contacts.module.css';


function Contacts() {
    return (

        <div className={styles.contacts}>
            <div className={styles.center1}>
                <form className={styles.centr}>
                    header
                    <input/><br/>
                    <input/><br/>
                    <input/><br/>
                    <button>нажать</button>
                </form>
            </div>
        </div>
    )
        ;
}


export default Contacts;
