import styles from './oneskill.module.css'
import { useState, useEffect } from 'react'


export default function OneSkill({icon, name, level}) {
    const [width, setWidth] = useState();

    useEffect(() => {
        setTimeout(() => {
            const newWidth = {
                opacity: 1,
                width: `${level}`
            }
                setWidth(newWidth)
        }, 1000);
    }, [level]);

    

    return (
        <>
            <div className={styles.skillContainer}>
                <div className={styles.skill}>
                    <div className={styles.icon}>
                        <p>{icon}</p>
                    </div>
                    <div className={styles.info}>
                        <h3>{name}</h3>
                        <div className={styles.skillBar}>
                            <div className={styles.progress} style={width}>
                                <span>{level}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}