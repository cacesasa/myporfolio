import styles from './skills.module.css'
import { FaCss3, FaHtml5, FaJs, FaReact, FaSass, FaGit, FaGithub, FaFigma, FaBootstrap } from 'react-icons/fa' 
import { VscVscodeInsiders } from "react-icons/vsc";
import OneSkill from './OneSkill';

const skillsData = [
    { id : 1, icon: <FaCss3/>, name: 'CSS', level: "90%" },
    { id: 2, icon: <FaHtml5/>, name: 'HTML 5', level: "85%" },
    { id: 3, icon: <FaJs/>, name: 'JavaScript', level: "75%" },
    { id: 4, icon: <FaBootstrap/>, name: 'Bootstrap', level: "85%" },
    { id: 5, icon: <FaReact/>, name: 'React', level: "80%" },
    { id: 6, icon: <FaSass/>, name: 'SASS', level: "50%" },
    { id: 7, icon: <FaGit/>, name: 'Git', level: "75%" },
    { id: 8, icon: <FaGithub/>, name: 'GitHub', level: "80%" },
    { id: 9, icon: <VscVscodeInsiders/>, name: 'VSCode', level: "90%" },
    { id: 10, icon: <FaFigma/>, name: 'Figma', level: "65%" },
  ]

export default function Skills() {
    return (
        <>
            <section className={styles.skills} id="skills">
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillCard}>
                        { 
                            skillsData.map((data) => 
                                <OneSkill icon={data.icon} name={data.name} level={data.level} key={data.name} /> )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}