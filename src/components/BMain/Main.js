import React from 'react';
import styles from './main.module.css';


function Main() {
    return (
        <div className={styles.main}  id ="Main">

            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Vadim Fedorin</span>
                    <span> </span>
                </div>
                <div >
                    <img className={styles.photo} src={require('../../assets/img/myPng.png')}
                         alt="photo"/>
                </div>
            </div>
        </div>
    )
        ;
}


export default Main;
