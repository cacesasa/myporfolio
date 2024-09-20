import styles from './projects.module.css'
import data from './ProjectDB'
import { useState } from 'react'

export default function ProjectCard() {

    
    const cardStyleHover = {
        backgroundImage: 'none',
        backgroundColor: '#0e76a8',
    }

    const [hovering, setHovering] = useState(-1)
    
    console.log(hovering)
    return (
        <>  
           {data.map((data) =>             
                <section className={styles.projectCard} onMouseEnter={() => setHovering(data.id)} onMouseLeave={() => setHovering(-1)}
                style={ hovering === data.id ? cardStyleHover : 
                { backgroundColor: `${data.bgColor}`, backgroundImage: `${data.bgColor}`}} key={data.id}>
                {
                    hovering === data.id ?
                    <div className={styles.cardContentHover}>
                        <h3 className={styles.cardDescription}>{data.description}</h3>
                        <button className={styles.cardButton}>
                            <a href={data.url} target="_blank">View Project {'>'}</a>
                        </button>
                    </div> :
                    <h2 className={styles.titleCard} >{data.title}</h2>
                }
            </section> 
            ) }  
                       
        </>
    )
}