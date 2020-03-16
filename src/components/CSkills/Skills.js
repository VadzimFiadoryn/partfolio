import React from 'react';
import styles from './skills.module.css';
import Skill from "./Skill";

function Skills() {
    return (
        <div className={styles.skills} id ="Skills">
            <div className={styles.navget}>
                <h1>Мои скиллы</h1>
                <div className={styles.blocks}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    )
        ;
}

export default Skills;
