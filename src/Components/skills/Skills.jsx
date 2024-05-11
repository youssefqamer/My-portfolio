// @ts-nocheck
import styles from './Skills.module.css'
import html from '../../assets/Imags/html.png'
import css from '../../assets/Imags/css.png'
import js from '../../assets/Imags/js.png'
import jquery from '../../assets/Imags/jquery.png'
import react from '../../assets/Imags/react.png'
import tailwind from '../../assets/Imags/tailwindcss.webp'
import bootstrap from '../../assets/Imags/bootstrap.png'
import next from '../../assets/Imags/nextjs.png'
const Skills = () => {
  return (
    <section className={`${styles.skills}`} id='skills'>
        <h3 className='main-title'>Skills</h3>
        <div>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={tailwind} alt="tailwind" />
            <img src={js} alt="js" />
            <img src={jquery} alt="jquery" />
            <img src={react} alt="react" />
            <img src={next} alt="next.js" />
        </div>
    </section>
  )
}

export default Skills