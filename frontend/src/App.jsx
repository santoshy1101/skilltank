import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Allroutes from './routes/Allroutes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <Navbar />

      <ToastContainer />
      <Allroutes />
      <Footer />
    </div>
  )
}

export default App
