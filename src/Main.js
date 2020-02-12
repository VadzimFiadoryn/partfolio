import React from 'react';
import styles from './main.module.css';


function Main() {
    return (
        <div className={styles.main}>

            <div className={styles.container}>
                main
                <div className={styles.greeting}>
                        <span> Текст </span>
                        <p>
                            <span> Текст </span>
                            </p>
                                <span> Текст </span>
                </div>
                <div className={styles.photo}>
                    <img src={require('../src/myPng.png')}
                         alt="описание"/>
                </div>
            </div>
        </div>
)
;
}


export default Main;
