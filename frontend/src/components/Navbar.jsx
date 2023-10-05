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
import { Link } from 'react-router-dom'

const Navbar = () => {
  const Nav = [
    { name: 'Home', link: '/' },
    { name: 'Officers' },
    { name: 'Examination' },
    { name: 'Section' },
    { name: 'Students' },
    { name: 'Academics' },
  ]

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
        <Flex alignItems={'center'} fontSize={'50px'} fontWeight={'200'}>
          /{' '}
          <Box fontSize={'13px'} fontWeight={'500'}>
            Part of Times <br />
            Higher Education
          </Box>
        </Flex>
      </Flex>

      <Flex columnGap={'2vw'}>
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
      </Flex>

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

      <Flex columnGap={'1vw'}>
        <Link to="/login">
          <Button colorScheme="teal">Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="red">Signup</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Navbar
