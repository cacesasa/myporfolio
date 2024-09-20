import styles from './navBar.module.css'
import { Twitter} from 'lucide-react'
import { Linkedin} from 'lucide-react'
import { Github} from 'lucide-react'
import Burger from './Burger'
import { Link } from 'react-scroll'

export default function NavBar() {    

    const navStyle = {
        color: '#0e76a8', 
        textDecoration: 'underline', 
        textDecorationColor: '#0e76a8', 
        textDecorationThickness: '0.2rem', 
        fontWeight: '900'
    }
    
    return (
        <>
            <Burger />

            <section className={styles.navBar} >

                <h2 className={styles.title}>CS</h2>

                <div className={styles.mobileNavList} >
                    <ul className={styles.navList}>
                        <li><Link smooth  to='about' activeStyle={navStyle} offset={-140} spy={true} duration={500}>About</Link></li>
                        <li><Link smooth  to='projects' activeStyle={navStyle} spy={true} duration={500}>Projects</Link></li>
                        <li><Link smooth  to='skills'  activeStyle={navStyle}  spy={true} duration={500}>Skills</Link></li>
                        <li><Link smooth  to='contact'  activeStyle={navStyle} spy={true} duration={500}>Contact</Link></li>
                    </ul>
                    <ul className={styles.socialList}>
                        <div className={styles.mediaWrap}>
                            <li><a href="https://www.linkedin.com/in/carlos-santana-94953782/" target='_blank'><Linkedin className={styles.linkedin}/></a></li>
                        </div>
                        <div className={styles.mediaWrap}>
                            <li><a href="https://github.com/cacesasa" target='_blank'><Github className={styles.github}/></a></li>
                        </div>
                        <div className={styles.mediaWrap}>
                            <li><a href="https://twitter.com/cacesasa" target='_blank'><Twitter className={styles.twitter}/></a></li>
                        </div>
                    </ul>
                </div>
            </section>
        </>
    )
}