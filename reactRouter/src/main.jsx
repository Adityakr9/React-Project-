import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/user.jsx'


const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element : <Home/>
      },
      {
        path : "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "github",
        element:<Github/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
