// @ts-ignore
import styles from './hero.module.css'
// @ts-ignore
import myPhoto from '../../assets/Imags/Myphoto.png'
// @ts-ignore
import cv from '../../assets/CV/cv.pdf'
import Lottie from "lottie-react";
import devloperAnimation from '../../animation/Animation - 1712849034190.json'
const Hero = () => {
  return (
    <>
    <section className={`${styles.hero} d-flex`} id='about'>
      <div className={`${styles.info}`}>
      <div className={`${styles.avatar}`}>
      <img src={myPhoto} alt="Myphoto" />
      </div>
      <div className={`${styles.describtion}`}>
      <h1 className={`${styles.title}`}>Hello, I&apos;m Youssef Qamer.
</h1>
      <p className={`${styles.subTitle}`}>I&apos;m a Frontend Developer (React.js) with a keen eye for design and a deep understanding of web development languages such as HTML, CSS, , JavaScript and React.js, I bring ideas to life by transforming concepts into interactive and responsive websites. </p>
      </div>
    <a href={cv} download="cv.pdf"  className={`${styles.cv}`}>
      Download My CV
    </a>
      </div>
      <div className={`${styles.animation}`}>
      <Lottie style={{height:307}}  animationData={devloperAnimation} />

      </div>
    </section>
    </>
  )
}

export default Hero