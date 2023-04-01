import React from 'react'
import style from './Login.module.css'
import { useState } from 'react';

const Login = () => {
  
  const [change, setChange]=useState(true)

  function handleClick(){
    if(change===false){
      setChange(true)
    }
    else{
      setChange(false)
    }
  }


  return (
    <div>
            {change ? 
      <form>

          <div className={style.input}>

            <input type="text" placeholder='User Name'/>
            
            <input type="text" placeholder='Enter Email'/>
            
            <input type="password" placeholder='Password'/>
            
            <input type="password"  placeholder='Confirm -Password'/>
            <button>Submit</button>
            <span onClick={handleClick}>{change? "Already have an Account Login"  :"Don't have an Account? Register"}</span>

          </div>
              
        
      </form>:
           <div className={style.login}>
            <input type="text" placeholder='User Name'/>
        <br />
            <input type="text" placeholder='Enter Email'/>
                <button>Submit</button>
            <span onClick={handleClick}>{change? "Already have an Account Login"  :"Don't have an Account? Register"}</span>

              </div>
            }
    </div>
  )
}

export default Login
