import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Signup from '../components/Signup'
import Login from '../components/Login'
import AddMentor from '../components/AddMentor'
import Mentors from '../components/Mentors'
import BookMentor from '../components/BookMentor'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addmentor" element={<AddMentor />} />
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/mentors/:id" element={<BookMentor />} />
    </Routes>
  )
}

export default Allroutes
