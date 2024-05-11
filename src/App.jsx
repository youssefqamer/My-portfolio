import Communication from './Components/6-communication/Communication';
import Header from './Components/1-Header/Header'
import Hero from './Components/2-Hero/Hero'
import Projects from './Components/3-Projects/Projects'
import Contact from './Components/4-contact/Contact'
import ScrollButton from './Components/Scroll/ScrollButton';
import Skills from './Components/skills/Skills';
function App() {
  return (
    <>
    <div className='container' >
  <Header/>
  <Hero/>
  <hr />
   <Projects/>
   <hr />
   <Skills/>
   <hr />
  <Contact/>
  <ScrollButton/>
  <Communication/>
  </div>
    </>
  )
}

export default App
