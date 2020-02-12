import React from 'react';
import styles from './skills.module.css';


function Skills() {
    return (

        <div className={styles.skills}>

            <div className={styles.navget}>
                Мои скиллы
                <div>

                    <img
                        src={require('../src/myPng.png')}
                        alt="описание"/>
                    текст
                </div>
                <div>

                    <img src={require('../src/myPng.png')}
                             alt="описание"/>
                    текст
                </div>
                <div>

                    <img src={require('../src/myPng.png')}
                             alt="описание"/>
                    текст
                </div>
            </div>
        </div>
    )
        ;
}


export default Skills;
