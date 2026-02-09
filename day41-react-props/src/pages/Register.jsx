import React from 'react'
import Button from '../components/Button'

function Register() {
  return (
    <div>
        <h1>Register Page</h1>
         <form>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="tel" placeholder='mobile-number' />
            <Button name="Register" />
        </form>
    </div>
  )
}

export default Register