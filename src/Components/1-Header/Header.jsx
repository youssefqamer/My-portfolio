// @ts-nocheck

import { useEffect, useState } from 'react'
import styles from  './header.module.css'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [screenSize, setScreenSize] = useState('')
  const [theme, setTheme] = useState(localStorage.getItem('mode')?localStorage.getItem('mode'):'dark')
  // const [themeIsClicked, setThemeIsClicked] = useState(false)
  // to close the pop up if the screen >991
  const handleResize=()=>{
    setScreenSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',handleResize)
    handleResize()
  }, [])
  useEffect(() => {
    if (screenSize>991) {
      setShowModal(false)
    }
    }, [screenSize])
    // useEffect(() => {
    //   if (screenSize>1200) {
    //     setShowModal(true)
    //   }else{
    //     setShowModal(false)
    
    //   }
    //   }, [screenSize])
    useEffect(() => {
    if (theme==='light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }else{
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
    }, [theme])
    
  return (
    <header className='d-flex'>
      <button className={`${styles.menu} icon-th-menu`} onClick={()=>setShowModal(true)}/>
      <div/>
      <nav >
    <ul className='d-flex'>
      <li><a href='#about'>About</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#contacts'>Contact</a></li>
    </ul>
      </nav>
      <button className={`${styles.mode}`} onClick={()=>{
        localStorage.setItem('mode',theme==='dark'?'light':'dark')
      setTheme(localStorage.getItem('mode'))
      }}>
        <span className={`${theme==='light'?'icon-sun':'icon-night'}`}></span>
      </button>
      {/* modal pop up  */}
      {showModal&& (
        <div className={`${styles.fixed} `}>
        <ul className={` ${styles.modal} `}>
          <li>
            <button className={`${styles.closeIcon} icon-close`} onClick={()=>setShowModal(false)}/>
          </li>
          <li><a href='#about' onClick={()=>setShowModal(false)}>About</a></li>
          <li><a href='#projects' onClick={()=>setShowModal(false)}>Projects</a></li>
          <li><a href='#skills' onClick={()=>setShowModal(false)}>Skills</a></li>
          <li><a href='#contacts' onClick={()=>setShowModal(false)}>Contact</a></li>
      </ul>
        </div>
      )}
      
   
    </header>
  )
}

export default Header