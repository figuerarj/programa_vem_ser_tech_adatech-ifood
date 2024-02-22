import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import Home from './screens/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:"/",
        element:<h1>Entrada</h1>
      },
      {
        path:"/signin",
        element:<h1>Signin</h1>
      },
      {
        path:"/signup",
        element:<h1>Signup</h1>
      },
      {
        path:"/contact",
        element:<h1>Contact</h1>
      },
      {
        path:"/games",
        element:<h1>Games</h1>
      },

    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
