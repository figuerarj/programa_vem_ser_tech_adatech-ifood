import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import {Home,Games,Login,Search,Subscribe,Welcome,Contact} from '../../browser_gamer/src/screens/index.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:"/",
        element:<Welcome/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/subscribe",
        element:<Subscribe />
      },
      {
        path:"/search",
        element:<Search/>
      },
      {
        path:"/contact",
        element:<Contact />
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
