import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import { Routes, Route } from 'react-router-dom'


const App = () => {

  const routeData = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <AboutUs />
    },
    {
      path: '/contact',
      element: <ContactUs />
    }
  ]

  return (
    <div>
      <Routes>
        {
          routeData.map((route) => {
            return (
              <Route path={route.path} element={route.element} />
            )
          })
        }
      </Routes>
    </div>
  )
}

export default App