import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './components/Landing.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path:"/Contacts",
    element: <Contact/>,
  },
  {
    path:"/Projects",
    element: <Projects/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
