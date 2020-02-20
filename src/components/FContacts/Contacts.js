import React from 'react';
import styles from './contacts.module.css';


function Contacts() {
    return (

        <div className={styles.contacts}>
            <div className={styles.conteiner}>
                <div className={styles.centr}>
                    <div className={styles.spanBlock}>
                        <h1>Contacts</h1>
                    </div>
                    <form className={styles.formF}>
                        <input/>
                        <input/>
                        <textarea cols="30" rows="10"> </textarea>
                    </form>
                    <div className={styles.flexButton}>
                        <button className={styles.button}>нажать</button>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}


export default Contacts;
