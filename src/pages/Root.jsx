import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='root' id='root'>

      <div className='header'>
        <h1>Railway Employee Management</h1>
        <ul>
          <li><Link to='/root/home'>Home</Link></li>
          <li><Link to='/root/registration'>Registration</Link></li>
          <li><Link to='/root/employee'>Employee</Link></li>
          <li><Link to='/root/contact'>Contact</Link></li>
          <li><Link to='/login'>Logout</Link></li>
        </ul>
        
      </div>

      <div className='content'>
        <Outlet/>
      </div>
     
    </div>
  )
}

export default Root
