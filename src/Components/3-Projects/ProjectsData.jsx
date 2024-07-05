import React, { useState } from 'react'
// @ts-ignore
import fokir from '../../assets/Imags/slider-01.jpg'
// @ts-ignore
import kasper from '../../assets/Imags/template2.jpg'
// @ts-ignore
import dashboard from '../../assets/Imags/dashboard.jpg'
// @ts-ignore
import devFolio from '../../assets/Imags/devfolio.jpeg'
// @ts-ignore
import daniels from '../../assets/Imags/daniels.jpeg'
// @ts-ignore
import template3 from '../../assets/Imags/template3.png'
// @ts-ignore
import simone from '../../assets/Imags/simone.jpeg'
// @ts-ignore
import yummy from '../../assets/Imags/logo.png'
// @ts-ignore
import crud from '../../assets/Imags/CRUD.jpeg'
// @ts-ignore
import bookmark from '../../assets/Imags/bookmark.jpg'
// @ts-ignore
import weather from '../../assets/Imags/weather.png'
// @ts-ignore
import login from '../../assets/Imags/signin.jpg'
// @ts-ignore
import gameOver from '../../assets/Imags/gameover.jpg'
// @ts-ignore
import noxe from '../../assets/Imags/maxresdefault.jpg'
// @ts-ignore
import shoppingCart from '../../assets/Imags/download.jpg'
// @ts-ignore
import reactDashboard from '../../assets/Imags/reactdashboard.png'
// @ts-ignore
import materialUiDashboard from '../../assets/Imags/Materialui.png'
// @ts-ignore
import quiz from '../../assets/Imags/quiz.png'
// @ts-ignore
import freshCart from '../../assets/Imags/freshcart.png'
// @ts-ignore
import todo from '../../assets/Imags/todo.png'
// @ts-ignore
import zoom from '../../assets/Imags/zoom.png'
const ProjectsData = () => {

    // let buttons=[
    //     {value:'All'},{value:'Html & Css'},{value:'Bootstrap'},{value:'Javascript'},{value:'React.js'},{value:'React.js & Bootstrap'}
    //   ]
    let buttons=[
        {value:'All'},{value:'Html & Css'},{value:'Bootstrap'},{value:'Javascript'},{value:'React.js'},{value:'Next.js'},
      ]
    const allProjects=[
        // css
{title:'Fokir landing page',describtion:'Fokir is a full responsive landing page consists of 7 sections.',category:'Html & Css',path:fokir,link:'https://youssefqamer.github.io/Fokir-/',repoLink:'https://github.com/youssefqamer/Fokir-/tree/master'},
{title:'Kasper landing page',describtion:'Kaspar is a full responsive html & css landing page consists of 9 sections.',category:'Html & Css',path:kasper,link:'https://youssefqamer.github.io/Template-2-Elzero/',repoLink:'https://github.com/youssefqamer/Template-2-Elzero/tree/master'},
{title:'Dashboard',describtion:'Responsive html & css dashboard consists of 8 pages.',category:'Html & Css',path:dashboard,link:'https://youssefqamer.github.io/Dashboard/',repoLink:'https://github.com/youssefqamer/Dashboard/tree/master'},
// bootstrap
{title:'DevFolio landing page',describtion:'Devfolio is a full responsive landing page consists of 5 sections.',category:'Bootstrap',path:devFolio,link:'https://youssefqamer.github.io/DevFolio/',repoLink:'https://github.com/youssefqamer/DevFolio'},
{title:'Daniels landing page',describtion:'Daniels is a full responsive landing page consists of 7 sections.',category:'Bootstrap',path:daniels,link:'https://youssefqamer.github.io/DANIELS/',repoLink:'https://github.com/youssefqamer/DANIELS/tree/master'},
{title:'Simone landing page',describtion:'Simone is a full responsive landing page consists of 7 sections.',category:'Bootstrap',path:simone,link:'https://youssefqamer.github.io/Simone-Olive/',repoLink:'https://github.com/youssefqamer/Simone-Olive'},

{title:'Elzero template',describtion:'Elzero template is a full responsive landing page consits of 12 different sections. ',category:'Bootstrap',path:template3,link:'https://youssefqamer.github.io/Template-3-Elzero/',repoLink:'https://github.com/youssefqamer/Template-3-Elzero/tree/master'},
// js
{title:'Yummy',describtion:'yummy is a responsive website using js and jquery gets recipes of different areas,countries and categories.',category:'js',path:yummy,link:'https://youssefqamer.github.io/yummy/',repoLink:'https://github.com/youssefqamer/yummy/tree/master'},
{title:'Crud system',describtion:'Full responsive crud system using js & bootstrap and localstorage for saving data.',category:'Javascript',path:crud,link:'https://youssefqamer.github.io/Crud-System/',repoLink:'https://github.com/youssefqamer/Crud-System/tree/master'},
{title:'Bookmark',describtion:'Full responsive bookmark app to save you favorite websites using js & bootstrap and localstorage for saving data with the possibility to search.',category:'Javascript',path:bookmark,link:'https://youssefqamer.github.io/Book-Mark/',repoLink:'https://github.com/youssefqamer/Book-Mark/tree/master'},

{title:'Weather App',describtion:'Full responsive weather app using js & bootstrap, you have the ability to search for you city to  get the expected wether for the next 3 days',category:'Javascript',path:weather,link:'https://youssefqamer.github.io/Weather/',repoLink:'https://github.com/youssefqamer/Weather/tree/master'},
{title:'Quiz App',describtion:'Quiz app using js oop , you can choose the category of questions , the level of diffculty and numbers of questions.',category:'Javascript',path:quiz,link:'https://youssefqamer.github.io/Quiz-App-/',repoLink:'https://github.com/youssefqamer/Quiz-App-/tree/master'},
{title:'Login System',describtion:'Sign up and login system using js and localstorage ',category:'Javascript',path:login,link:'https://youssefqamer.github.io/Smart-Login-System/',repoLink:'https://github.com/youssefqamer/Smart-Login-System/tree/master'},
// react.js
{title:'Noxe',describtion:'Noxe Is a Movies App WReact.js.js and Context Using Moviedb Api, it gets trending Movies,TvShows and perosn ,you can move between 100 page.',category:'React.js',path:noxe,link:'https://youssefqamer.github.io/Noxe/',repoLink:'https://github.com/youssefqamer/Noxe/tree/master'},
{title:'FreashCart',describtion:'FreshCart is an E-commerce project made by React.js and react query,it is fully responsive via all screens ,it includes full login and register system , the user has sidefilter for filtration the products ,the user can add to wishlist and add to cart then checkout cash or using credit card via stripe.',category:'React.js',path:freshCart,link:'https://youssefqamer.github.io/FreshCart/',repoLink:'https://github.com/youssefqamer/FreshCart'},
{title:'GameOver',describtion:'Game Over is a Games App With React.js and Context Using Rapid Api,fully functional registeration and login from.',category:'React.js',path:gameOver,link:'https://youssefqamer.github.io/Game-Over/',repoLink:''},

{title:'Syncfusion Dashboard',describtion:'React Dashboard using syncfusion,tailwind and context, it consists of many page with many options like dark mode changing theme color.',category:'React.js',path:reactDashboard,link:'https://youssefqamer.github.io/ReactDashboard/',repoLink:'https://github.com/youssefqamer/ReactDashboard/tree/master'},
{title:'ShoppingCart',describtion:'Shopping cart with react using Fake Api and Redux Toolkit.',category:'React.js',path:shoppingCart,link:'https://youssefqamer.github.io/shopping-cart/',repoLink:'https://github.com/youssefqamer/ReactDashboard/tree/master'},
{title:'Mui Dashboard',describtion:'Dashboard using Mui,Nivo and JavaScript FullCalendar,consists of many pages with dark mode.',category:'React.js',path:materialUiDashboard,link:'https://youssefqamer.github.io/React-Dashboard-With-Mui/',repoLink:'https://github.com/youssefqamer/React-Dashboard-With-Mui/tree/master'},



// {title:'FreashCarttt',describtion:'FreshCart is an E-commerce project made by React.js and react query,it is fully responsive via all screens ,it includes full login and register system , the user has sidefilter for filtration the products ,the user can add to wishlist and add to cart then checkout cash or using credit card via stripe.',category:['React.js','Bootstrap' ],path:freshCart,link:'https://youssefqamer.github.io/FreshCart/'},

// next.js 
{title:'Todo App',describtion:'Fullstack Todo App using Next.js , Typescript , Tailwind css , schadcn ui , prisma , Mongodb and clerk for Authentication.',category:'Next.js',path:todo,link:'https://fullstack-next-js-todo-bcaucv2cm-youssefqamers-projects.vercel.app',repoLink:'https://github.com/youssefqamer/Fullstack-Next.js-Todo-App'},

{title:'Zoom Clone',describtion:'Fullstack zoom clone using Next.js , Typescript , Tailwind css , schadcn ui ,stream and clerk for Authentication.',category:'Next.js',path:zoom,link:'https://zoom-clone-seven-blush.vercel.app/',repoLink:'https://github.com/youssefqamer/Zoom_Clone/tree/main'},
    ]



    const [activeButton, setActiveButton] = useState(0)
    const [isCopied, setIsCopied] = useState(false)
    const [copiedLinkIndex, setCopiedLinkIndex] = useState(0)
    const [filteredProjects, setFilteredProjects] = useState(allProjects)
    const handleClick=(index)=>{
        setActiveButton(index)
      }
      // const handleIconClick = (event, link,index) => {
      //   event.stopPropagation();
      //   navigator.clipboard.writeText(link);
      //   setIsCopied(true)
      //   setCopiedLinkIndex(index)
      //   setTimeout(() => {
      //     setIsCopied(false)
      //   }, 3000);
      // };
      
      const filterProjects=(category)=>{
        if (category!=='All') {
          const newArray=allProjects.filter((project)=>project.category===category)
        // @ts-ignore
        setFilteredProjects(newArray)
    
        }else{
          setFilteredProjects(allProjects)
        }
   
      } 
      // let mixedCaregories=[]
      // const filterProjects=(category)=>{
      //   if (category!=='All') {
      //     const newArray=allProjects.filter((project)=>{ 
      //       // check if the project has more the on category ([])
      //         if (Array.isArray(project.category)) {
      //           const arr =project.category.filter((projectCategory)=>{
      //           //  the project which have more the one categoy will return each one as a sepereate element so i push them in array, for ex ===> 1-React.js 2-Bootstrap ===>[React.js,Bootstrap] 
      //             mixedCaregories.push(projectCategory)
      //             if (category.replace('&','')==='React.js  Bootstrap') {
      //               // i will check if this condition returns true this means that i clicked on the button which has this value 'React.js & Bootstrap'so in this case it will return the projectCategory which has the category React.js Bootstrap 
      //               console.log( projectCategory===mixedCaregories.map((y)=>y).join(' '))
      //               return projectCategory===mixedCaregories.map((cat)=>cat).join(' ')
      //             }else{
      //               // here is the above condition not true it will check if the projectCategoy which in this case is React.js and Bootstrap includes React.js Bootstrap so it will display this project in the boostrap and in the React
      //               return projectCategory.includes(category.replace('&',''))
      //             }
      //           })
      //           return arr[0]
                
      //       }else{
      //         // if it has only one category it will return the projects which has category ===the value of the button i clicked (category)
      //         return project.category===category
      //     }
            
      //   })
      //   // @ts-ignore
      //   // then set the newArray which contains the filterd projects
      //   setFilteredProjects(newArray)
    
      //   }else{
      //     // if the value of the button is All it will set the original array
      //     setFilteredProjects(allProjects)
      //   }
   
      // }
    return [buttons,handleClick,filterProjects,activeButton,isCopied,copiedLinkIndex,filteredProjects]
}

export default ProjectsData