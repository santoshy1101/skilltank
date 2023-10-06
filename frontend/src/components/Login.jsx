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

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student', // Default role
  })

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

    if (formData.email !== '' && formData.password !== '') {
      console.log(formData)
      const { data } = await axios.post(`${URL}/auth/login`, formData)
      try {
        console.log(data.token)
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
        console.log('hello', error)
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
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Login
