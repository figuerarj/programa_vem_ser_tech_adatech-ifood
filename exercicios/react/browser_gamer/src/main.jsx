import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import Home from './screens/Home'
import Games from './screens/games'
import Search from './screens/search'
import Login from './screens/login'


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
        path:"/login",
        element:<Login/>
      },
      {
        path:"/search",
        element:<Search/>
      },
      {
        path:"/contact",
        element:<h1>Contact</h1>
      },
      {
        path:"/games",
        element:<Games />
      },

    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
