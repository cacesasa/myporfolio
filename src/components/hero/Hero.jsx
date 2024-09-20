import styles from './hero.module.css'
import heropic from '../../assets/images/carlos.jpg'

export default function Hero() {
    return (
        <>
            <section className={styles.hero} id = "about" >
                <img src={heropic} className={styles.image} alt='Carlos Santana' />
                <div className={styles.content}>
                    <h1 className={styles.title}>Carlos Santana</h1>
                    <h2 className={styles.subtitle}>Frontend Developer</h2>
                    <p className={styles.description}>I am a junior frontend developer with a passion for creating engaging and user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and React, I enjoy bringing design concepts to life and enhancing user experiences. I am eager to learn and grow within a collaborative team, contributing my skills to build innovative web applications.</p>
                </div>
            </section>
        </>
    )
}