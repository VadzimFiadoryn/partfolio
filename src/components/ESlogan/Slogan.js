import React from 'react';
import styles from './slogan.module.css';


function Slogan() {
    return (

        <div className={styles.slogan}>

            <div className={styles.centr}>
                <h2>Slogan</h2>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum excepturi iure nemo nesciunt optio
                    voluptatibus. Autem cum debitis in ipsam magni molestiae, molestias non, obcaecati quasi quis
                    suscipit tempore, unde!
                </div>
                <div className={styles.form}>
                    <form>
                        <button>
                            push
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
}


export default Slogan;
