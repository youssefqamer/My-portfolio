import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import styles  from './contact.module.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../src/animation/Animation - 1712845909919.json'
import contactAnimation from '../../../src/animation/Animation - 1714728848014.json'
const Contact = () => {
  // @ts-ignore
  const [state, handleSubmit] = useForm(import.meta.env.VITE_REACT_APP_FORMSPREE_KEY_SECRET);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const nameRef = useRef(null);
  const subjectRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        nameRef.current.value = '';
        subjectRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
      }, 4000);
    }
  }, [state.succeeded]);
  
  return (
    <>
    <section id='contacts'>
   <div className={`${styles.text}`}>
   <h1 className={`${styles.title}`}>
      <span className='icon-envelope'></span>
      {' '}
      Contact us
    </h1>

    <p className={`${styles.subtitle}`}>Ready to bring your ideas to life ?<br/> Let&apos;s start a conversation about your needs.
</p>
   </div>
   <div className={`${styles.contact} d-flex`}>
    <form onSubmit={handleSubmit}>
      <input type="text"  placeholder='Name' required  ref={nameRef}/>
     
      <input type="text" placeholder='Subject' required  ref={subjectRef}/>
      <input type="email" name='email' placeholder='Email' required  ref={emailRef}/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea placeholder='Message' name='message' required  ref={messageRef}></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        {state.submitting?'Submitting...':'Submit'}
      </button>
      <div style={{display:'flex' , alignItems:'center'}}>
      <Lottie  style={{height:45, color :'red' ,opacity:showSuccessMessage? 1 : 0}} animationData={doneAnimation} />
      <p style={{opacity:showSuccessMessage? 1 : 0 }} className={`${styles.successMessage}`} >Your message has been sent successfully</p>
      </div>
    </form>
    <div className={`${styles.animation}`}>
    <Lottie style={{height:355}}  animationData={contactAnimation} />
    </div>
   </div>
    </section>
    
    
    </>
  )
}

export default Contact