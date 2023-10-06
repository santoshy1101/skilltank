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
import { useNavigate } from 'react-router-dom'

const AddMentor = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    experience: '', // Default role
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
      formData.image !== '' &&
      formData.name !== '' &&
      formData.experience !== ''
    ) {
      // console.log(formData)
      await axios.post(`${URL}/mentors/add`, formData)
      try {
        toast.success('Mentor add successfull', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        navigate('/mentors')
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
          <Heading fontSize={'2xl'}>Add Mentor</Heading>

          <FormControl id="image">
            <FormLabel>Image Url</FormLabel>
            <Input
              type="text"
              value={formData.image}
              onChange={handleChange}
              required // Adding the required attribute
            />
          </FormControl>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={formData.name}
              onChange={handleChange}
              required // Adding the required attribute
            />
          </FormControl>
          <FormControl id="experience">
            <FormLabel>Experience (years)</FormLabel>
            <Input
              type="text"
              value={formData.experience}
              onChange={handleChange}
              required // Adding the required attribute
            />
          </FormControl>

          <Stack>
            <Button
              colorScheme={'blue'}
              variant={'solid'}
              onClick={handleSubmit}
            >
              Add Mentor
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://skillbackend-lovs.vercel.app/static/media/sammy.a5ce240a357bc22c7623.gif'
          }
        />
      </Flex>
    </Stack>
  )
}

export default AddMentor
