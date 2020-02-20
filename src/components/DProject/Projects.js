import React from 'react';
import styles from './projects.module.css';
import Project from "./Project";


function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.containerWidth}>
                <div>
                    <h2> my Projects </h2>
                </div>
                <div className={styles.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
