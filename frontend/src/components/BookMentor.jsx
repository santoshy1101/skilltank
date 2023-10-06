import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Input,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { toast } from 'react-toastify'

export default function BookMentor() {
  const { id } = useParams()
  const [mentor, setMentor] = useState({})
  const [book, setBook] = useState('')
  const navigate = useNavigate()
  const URL = import.meta.env.VITE_APP_URL

  const getData = async () => {
    const { data } = await axios.get(`${URL}/mentors/${id}`)
    // console.log(data)
    try {
      setMentor(data)
    } catch (error) {
      console.log('err', error)
    }
    // console.log("data",data)
  }

  const handleBookMentor = () => {
    if (book !== '') {
      toast.success(`Mentor book successfull on the date of ${book}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      navigate('/')
    } else {
      toast.error('Select the date for booking', {
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
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getData()
  }, [])

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={mentor.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
            loading="lazy"
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {mentor.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              Experience: {mentor.experience} years
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
          </Stack>

          <Input
            placeholder="Basic usage"
            type="date"
            onChange={(e) => setBook(e.target.value)}
          />

          <Flex alignItems={'center'}>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              Availability:
            </Text>
            <Button
              rounded={'none'}
              w={'full'}
              roundedBottomEnd={50}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={handleBookMentor}
            >
              Book Mentor
            </Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>Mentor will connect with you within 2-3 business days</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
