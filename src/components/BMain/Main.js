import React from 'react';
import styles from './main.module.css';


function Main() {
    return (
        <div className={styles.main}>

            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis dolore dolores esse ex iure quam, quasi vero. Beatae commodi eligendi est laborum minima omnis pariatur praesentium quia, quod temporibus.</span>
                </div>
                <div className={styles.photo}>
                    <img src={require('../../assets/img/myPng.png')}
                         alt="photo"/>
                </div>
            </div>
        </div>
    )
        ;
}


export default Main;
