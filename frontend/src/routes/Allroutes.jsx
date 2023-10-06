import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Signup from '../components/Signup'
import Login from '../components/Login'
import AddMentor from '../components/AddMentor'
import Mentors from '../components/Mentors'
import BookMentor from '../components/BookMentor'
import PrivateRoute from '../components/PrivateRoute'
import { useSelector } from "react-redux";

const Allroutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // isAuthenticated ? <Route>{children}</Route> : <Navigate to="/login" />;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route  path="/mentors/:id"  element={ <PrivateRoute> <BookMentor /> </PrivateRoute>}  />
      <Route  path="/addmentor"  element={ <PrivateRoute> <AddMentor /> </PrivateRoute>}  />
      <Route path="/mentors"   element={ <PrivateRoute> <Mentors /> </PrivateRoute>}  />

    </Routes>
  )
}

export default Allroutes
