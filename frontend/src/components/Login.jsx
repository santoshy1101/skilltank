import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Select,
} from '@chakra-ui/react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student', // Default role
  })
  const dispatch = useDispatch()

  const URL = import.meta.env.VITE_APP_URL
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async () => {
    // Here, you can access formData and perform any actions you need

    if (
      formData.email !== '' &&
      formData.password !== '' &&
      formData.email.includes('@')
    ) {
      // console.log(formData)
      const { data } = await axios.post(`${URL}/auth/login`, formData)
      try {
        // console.log(data.token)
        dispatch(login(data.token))
        toast.success('Login successfull', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        navigate('/addmentor')
      } catch (error) {
        // console.log('hello', error)
        toast.error('There is some error', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
    } else {
      toast('Fill all required information')
    }
    // You can also send formData to your backend for further processing
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row-reverse' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Login</Heading>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required // Adding the required attribute
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required // Adding the required attribute
            />
          </FormControl>
          <FormControl id="role">
            <FormLabel>Select Role:</FormLabel>
            <Select
              placeholder="Select option"
              value={formData.role}
              onChange={handleChange}
              required // Adding the required attribute
            >
              <option value="student">Student</option>
              <option value="company">Company</option>
            </Select>
          </FormControl>
          <Stack>
            <Button
              colorScheme={'blue'}
              variant={'solid'}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          m="auto"
          src={
            'https://skillbackend-lovs.vercel.app/static/media/face.d2accb1e7332c3c996ca.gif'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Login
