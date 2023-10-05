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

const AddMentor = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    experience: '', // Default role
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

    if (formData.image !== '' && formData.name !== '' && formData.experience!== '') {
      console.log(formData)
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
