import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Login from './views/Login.jsx'
import Layout from './layouts/Layout.jsx'
import Home from './views/Home.jsx'
import Register from './views/Register.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '',
        element: <Home />
      }, 
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
