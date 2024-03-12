import React from 'react'
import './CSS/loginsignup.css'

const Loginsihnup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='your name'/>
          <input type="email" placeholder=' email address' />
          <input type="password" placeholder='password'/>
</div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""></input>
          <p>by continuing i agree to the terms of use and privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default Loginsihnup