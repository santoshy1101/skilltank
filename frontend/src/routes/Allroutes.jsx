import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Signup from '../components/Signup'
import Login from '../components/Login'
import AddMentor from '../components/AddMentor'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addmentor" element={<AddMentor />} />
    </Routes>
  )
}

export default Allroutes
