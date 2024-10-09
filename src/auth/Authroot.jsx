import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Authroot = () => {
  return (
    <div className='authroot'>
      <div className='authcontent'>
        
        <h1>Welcome to <br/> Railway employee management</h1>

        <p>World best employee management services</p>

        <img src="https://clipground.com/images/employee-png-2.png" alt="" />

      </div>

      <div className='authoutlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default Authroot
