import React from 'react';
import styles from './header.module.css';


function Header() {
    return (

        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <a href="#Main" className={styles.link}> Главная </a>
                    <a href="#Skills" className={styles.link}> Скиллы </a>
                    <a href="#Project" className={styles.link}> Проекты </a>
                    <a href="#Contacts" className={styles.link}> Контакты</a>
                </div>
            </div>
        </div>
    )
        ;
}


export default Header;
