// @ts-nocheck
// @ts-ignore
import ProjectsData from './ProjectsData'
import styles from  './projects.module.css'
import { motion,AnimatePresence  } from "framer-motion";

const Projects = () => {
  const [buttons,handleClick,filterProjects,activeButton,isCopied,copiedLinkIndex,filteredProjects] =ProjectsData()

  
  return (
   <>
   <main id='projects'>
    <h3 className='main-title'>Projects</h3>
    <div className={`${styles.main}`}>

 
    <div className={`${styles.filteration}`}>
    {buttons.map((button,index)=>{
      return <button key={index} onClick={()=>{
        handleClick(index);
        filterProjects(button.value);
      }}
      className={`${index===activeButton?styles.active:''}`}
      >{button.value}</button>
})}

    </div>
    <div className={`${styles.projects}`}>
      <AnimatePresence>
      {filteredProjects?.map((project,index)=>{
        return  <motion.article key={index} className={`${styles.card}`} 
            layout
        animate={{ transform: 'scale(1)' }}
        initial={{ transform: 'scale(0)' }}
        transition={{type:'spring',damping:35,stiffness:90}}>
        <a href={project.link} target='_blank'>
        <img src={project.path} alt={project.title} />
        </a>
       <div className={`${styles.text}`}>
       <h3 className={`${styles.title}`}>{project.title}</h3>
        <p className={`${styles.subtitle}`}>{project.describtion}</p>
       </div>
       <div className={`${styles.icons}`}>
        
        <a href={project.repoLink} target='_blank' className="icon-link"></a>
            {/* // onClick={(event) => handleIconClick(event, project.link,index)}> */}
            
            {/* {isCopied&& copiedLinkIndex===index?<p className={`${styles.copyLink}`}>link copied</p>:''} */}
          <a href={project.link} target='_blank' className='icon-github-square' ></a>
       
       </div>
        </motion.article> 
      })}
</AnimatePresence>
    </div>
    </div>
   </main>
   </>
  )
}

export default Projects