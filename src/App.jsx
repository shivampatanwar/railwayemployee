import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// css
import './auth/Auth.css'
import './pages/Root.css'


// Components
import Login from './auth/Login'
import Signup from './auth/Signup'
import Root from './pages/Root'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Employee from './pages/Employee'
import Contact from './pages/Contact'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/root',
      element: <Root/>,
      children:[
        {
          path: '/root/',
          element: <Home/>
        },
        {
          path: '/root/home',
          element: <Home/>
        },
        {
          path: '/root/registration',
          element: <Registration/>
        },
        {
          path: '/root/employee',
          element: <Employee/>
        },
        {
          path: '/root/contact',
          element: <Contact/>
        }
      
      ]
    }

    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
