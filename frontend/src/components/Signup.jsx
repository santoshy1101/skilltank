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
import { ToastContainer, toast } from 'react-toastify'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student', // Default role
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = () => {
    // Here, you can access formData and perform any actions you need

    if (
      formData.name !== '' &&
      formData.email !== '' &&
      formData.password !== ''
    ) {
      console.log(formData)
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
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Signup
