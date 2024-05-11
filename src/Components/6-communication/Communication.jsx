import { useState } from 'react'
// @ts-ignore
import styles from './Communication.module.css'
const Communication = () => {
    const [showIcons, setShowIcons] = useState(false)
  return (
    <>
    <section className={`${styles.communication}`}>
    <div>
 <div className={`${styles.contactsIcon} `} onClick={()=>setShowIcons(!showIcons)}>
 <i className='icon-group'></i>
 </div>
 <div className={`${showIcons?`${styles.GithubIcon}`: `${styles.closeIcons}`}`}>
 <a href="https://github.com/youssefqamer" target='_blank' className=' text-white-50 text-decoration-none '>
    <i className={'icon-github-square'}></i>
 </a>
 </div>
 <div className={`${showIcons?`${styles.Gmail}`:`${styles.closeIcons}`}`}>
 <a href="mailTo:youssefqamer69@gmail.com" className=' text-white-50 text-decoration-none '><i className='icon-gmail'></i></a>
 </div>
 <div className={`${showIcons?`${styles.LinkedIn}`:`${styles.closeIcons}`}`}>
 <a href="https://www.linkedin.com/in/youssef-qamer/" target='_blank' className=' text-white-50 text-decoration-none '><i className='icon-linkedin-square'></i></a>
 </div>
 </div>
    </section>
    
    
    </>
  )
}

export default Communication