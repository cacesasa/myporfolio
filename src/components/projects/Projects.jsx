import styles from './projects.module.css'
import ProjectCard from './ProjectCard'
export default function Projects() {
    return (
        <>
            <section className={styles.projects} id="projects">
                <h2 className={styles.title}>Featured Projects</h2>
                <div className={styles.projectsContainer}>
                    <ProjectCard/>                    
                </div>
            </section>
        </>
    )
}