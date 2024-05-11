import { useEffect, useState } from 'react'
// @ts-ignore
import styles from './ScrollButton.module.css'
const ScrollButton = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',()=>{
     if (window.scrollY > window.innerHeight) {
      setScroll(true)
     }else{
      setScroll(false)
     }
    })
  }, [])
  const scrollToTop=()=>{
    window.scrollTo(0,0)
  }
  return (
    <>
    <div className={`${styles.fixed}`}>
    <a style={{opacity:scroll?1:0 } } onClick={scrollToTop}>
    <button className='icon-arrow-up'></button>
    </a>
    </div>
    
    
    </>
  )
}

export default ScrollButton