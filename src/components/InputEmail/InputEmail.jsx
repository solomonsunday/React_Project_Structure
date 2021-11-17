import React from 'react'

function InputEmail() {
    return (
        <div className='email'>
    <input
      type="text"
      className='emailInput'
      placeholder="Your Email"
    />

    <img src="/images/emailSubmit.svg" alt=""/>
  </div>
    )
}

export default InputEmail
