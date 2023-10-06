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
} from '@chakra-ui/react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
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

    if (
      formData.name !== '' &&
      formData.email !== '' &&
      formData.password !== ''
    ) {
      // console.log(formData)
      await axios.post(`${URL}/auth/signup`, formData)
      try {
        toast.success('Signup successfull', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        navigate('/login')
      } catch (error) {
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
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign Up</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required // Adding the required attribute
            />
          </FormControl>
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
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          m="auto"
          src={
            'https://skillbackend-lovs.vercel.app/static/media/polar.381fe4d120286899f869.gif'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Signup
