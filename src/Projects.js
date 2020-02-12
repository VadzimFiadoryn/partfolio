import React from 'react';
import styles from './projects.module.css';


function Projects() {
    return (

        <div className={styles.container}>
            <div className={styles.cont2}>


                <div className={styles.center}>

                    my Projects

                </div>

                <div className={styles.projects}>


                    <div className={styles.navget}>

                        <div className={styles.block}>
                            <img src={require('../src/myPng.png')}
                                 alt="описание"/>
                            <p>
                                3333
                            </p>

                            sgbsdgsgewt4tgw

                        </div>


                        <div className={styles.block}>
                            <img src={require('../src/myPng.png')}
                                 alt="описание"/>
                            <p>
                                safafasfacaaca
                            </p>
                            asasvaftw435hbvr
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}


export default Projects;
