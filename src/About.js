import React from 'react'
import style from './About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
   <div className={style.container}>

       <h1>About me</h1>
      <div className={style.About}>
       <div className={style.profile}>
       <FontAwesomeIcon icon={faMale} className={style.icon} />
       </div>
       
       <div className={style.detail}>
        <div>
        <p>Abhishek Bhashkar</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga neque sequi accusantium, enim tempora ab soluta? Doloremque est animi maxime ex, eius eos quos laboriosam quod laudantium libero, esse consequuntur suscipit. Doloribus quisquam accusamus sequi officia odio ut, eius velit sunt doloremque assumenda error corrupti recusandae! Porro similique inventore labore vero doloribus ad saepe fuga cupiditate ipsa eveniet quod numquam perspiciatis vitae deleniti nihil doloremque possimus maiores, veniam, magni quasi? Assumenda quam laborum qui, aliquid sint deserunt vero nesciunt beatae!</p>
        </div>

        <div className={style.self}>

        <div className={style.skill}>
          <p>What are your skills</p>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className={style.hobby}>
        <p>What are your hobbies</p>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className={style.learning}>
        <p>What are you learning</p>
          <p>Lorem ipsum dolor</p>
        </div>

        </div>

       </div>
       </div>


    </div>
  )
}

export default About