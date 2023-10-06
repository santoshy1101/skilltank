import {
  Box,
  Flex,
  Spacer,
  Image,
  Grid,
  Heading,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import { toast } from 'react-toastify'

const Navbar = () => {
  const Nav = [
    { name: 'Home', link: '/' },
    { name: 'Officers' },
    { name: 'Examination' },
    { name: 'Section' },
    { name: 'Students' },
    { name: 'Academics' },
  ]
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const handleLogout = async () => {
    await dispatch(logout())
    try {
      toast.success('Logout successfull', {
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
    } catch (error) {
      console.log('err', error)
    }
  }

  return (
    <Flex
      alignItems={'center'}
      borderBottom={'2px'}
      justifyContent={'space-around'}
    >
      <Flex alignItems={'center'}>
        <Image
          boxSize={'50px'}
          borderRadius={50}
          src="https://img.freepik.com/premium-photo/school-simple-illustration_905829-2586.jpg?size=626&ext=jpg&ga=GA1.2.1267932460.1691771333&semt=aishttps://img.freepik.com/premium-photo/school-simple-illustration_905829-2586.jpg?size=626&ext=jpg&ga=GA1.2.1267932460.1691771333&semt=ais"
          alt="Logo"
        />
        <Heading color={'#735688'}>MR</Heading>
        <Box
          display={{ lg: 'Flex', base: 'none' }}
          alignItems={'center'}
          fontSize={'50px'}
          fontWeight={'200'}
        >
          /{' '}
          <Box fontSize={'13px'} fontWeight={'500'}>
            Part of Times <br />
            Higher Education
          </Box>
        </Box>
      </Flex>

      <Box display={{ lg: 'Flex', base: 'none' }} columnGap={'2vw'}>
        {Nav.map(({ name, link }, ind) => (
          <Link key={ind} to={link}>
            <Heading
              borderBottom="2px solid white"
              _hover={{ borderColor: 'Black' }}
              cursor={'pointer'}
              as="h5"
              size="md"
            >
              {name}
            </Heading>
          </Link>
        ))}
      </Box>

      <Menu>
        <MenuButton as={Button}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Learn</MenuItem>
          <MenuItem>Mentor</MenuItem>
          <MenuItem>Compete</MenuItem>
          <MenuItem>Jobs</MenuItem>
        </MenuList>
      </Menu>

      {isAuthenticated ? (
        <Button onClick={handleLogout} colorScheme="red">
          Logout
        </Button>
      ) : (
        <Flex columnGap={'1vw'}>
          <Link to="/login">
            <Button colorScheme="teal">Login</Button>
          </Link>
          <Link to="/signup">
            <Button size="md" border="2px" borderColor="red.500">
              Signup
            </Button>
          </Link>
        </Flex>
      )}
    </Flex>
  )
}

export default Navbar
