import React from 'react'
import './login.css'
import SignUp from './SignUp'
function Login() {
  return (
    <>
    <div className='bodyLogin'>
     <div className="mainLogin">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signupLogin">
          <form>
            <label htmlFor="chk" aria-hidden="true" className='labelLogin'>Bienvenu</label>
            <img src='/img/login.svg' alt='login' className='' style={{width: '90%'}}/>
          </form>
        </div>
        <div className="loginnn">
            <SignUp/>
        </div>
      </div></div>
    </>
  )
}

export default Login