import styles from './rightNav.module.css'
import { Twitter} from 'lucide-react'
import { Linkedin} from 'lucide-react'
import { Github} from 'lucide-react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

export default function RightNav({open, setOpen}) {    

    const navStyle = { 
        textDecoration: 'underline', 
        textDecorationColor: '#ffffff', 
        textDecorationThickness: '0.2rem', 
        fontWeight: '900'
    }

    return (
        <div className={styles.mobileNavList} 
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.5s ease-in-out' } } >
            <ul className={styles.navList}>
                <li><Link smooth  to='about' activeStyle={navStyle} offset={-140} spy={true} duration={500} onClick={setOpen}>About</Link></li>
                <li><Link smooth  to='projects' activeStyle={navStyle} spy={true} duration={500} onClick={setOpen}>Projects</Link></li>
                <li><Link smooth  to='skills'  activeStyle={navStyle}  spy={true} duration={500} onClick={setOpen}>Skills</Link></li>
                <li><Link smooth  to='contact'  activeStyle={navStyle} spy={true} duration={500} onClick={setOpen}>Contact</Link></li>
            </ul>
            <ul className={styles.socialList}>
                <div className={styles.mediaWrap}>
                    <li><a href="https://www.linkedin.com/in/carlos-santana-94953782/" target='_blank' onClick={setOpen}><Linkedin className={styles.linkedin}/></a></li>
                </div>
                <div className={styles.mediaWrap}>
                    <li><a href="https://github.com/cacesasa" target='_blank' onClick={setOpen}><Github className={styles.github}/></a></li>
                </div>
                <div className={styles.mediaWrap}>
                    <li><a href="https://twitter.com/cacesasa" target='_blank' onClick={setOpen}><Twitter className={styles.twitter}/></a></li>
                </div>
            </ul>
        </div>
    )
}

RightNav.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
  };