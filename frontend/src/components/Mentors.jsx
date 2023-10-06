import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  GridItem,
  Flex,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from "axios";

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

const data = new Array(12).fill(1)
export default function Mentors() {
  const [mentors,setMentors] = useState([])
  const navigate = useNavigate()
  const URL = import.meta.env.VITE_APP_URL;

  const getData = async()=>{
    const {data} = await axios.get(`${URL}/mentors/mentors`)
    try {
      setMentors(data)
    } catch (error) {
      console.log("err",error)
    }
    // console.log("data",data)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getData()
  }, [])




  //   {
  //     "_id": "651ed176c603d9b9e1e129e3",
  //     "image": "https://picsum.photos/id/76/282/230",
  //     "name": "rahul",
  //     "experience": 2,
  //     "createdAt": "2023-10-05T15:08:38.374Z",
  //     "updatedAt": "2023-10-05T15:08:38.374Z",
  //     "__v": 0
  // }

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      m={`40px`}
      gap={6}
    >
      {mentors.map((ele, ind) => {
        return (
          <GridItem
            key={ind}
            cursor={'pointer'}
           
          >
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  /* height={'230px'} */
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,

                    backgroundImage: `url(${ele.image})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                  
                  w={'282px'}
                  h={'230px'}
                    loading="lazy"
                    objectFit={'cover'}
                    src={`${ele.image}`}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    Experience: {ele.experience} years
                  </Text>

                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                   {ele.name}
                  </Heading>

                  <Flex
                    fontSize={'lg'}
                    fontFamily={'body'}
                    fontWeight={400}
                    color={'gray.500'}
                    alignItems={'center'}
                  >
                    Availability:{' '}
                    <Button size="md" border="2px" borderColor="green.500">
                      Available
                    </Button>
                  </Flex>

                  <Link to={`/mentors/${ele._id}`}><Button colorScheme="pink" variant="solid">
                  View Mentor
                </Button> </Link>
                 
                </Stack>
              </Box>
            </Center>
          </GridItem>
        )
      })}
    </Grid>
  )
}
