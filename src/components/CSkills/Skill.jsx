import React from 'react';
import styles from './skills.module.css';


function Skill() {
    return (
        <div className={styles.content}>
            <img
                src={require('../../assets/img/myPng.png')}
                alt="описание"/>
            <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ab accusantium at delectus dolorem, eos expedita
                    laboriosam magnam neque nihil nisi officiis placeat praesentium similique
                    ut veniam! Accusamus ex quia ratione?
                </span>
        </div>
    )
        ;
}

export default Skill;
