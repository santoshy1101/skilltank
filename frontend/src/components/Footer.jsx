import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  const FootLogo = [
    { logo: <FaTwitter size={20} />, link: 'https://twitter.com/' },
    { logo: <FaFacebookSquare size={20} />, link: 'https://www.facebook.com/' },
    { logo: <FaInstagram size={20} />, link: 'https://www.instagram.com/' },
    { logo: <FaLinkedin size={20} />, link: 'https://www.linkedin.com/feed/' },
  ]
  return (
    <Box mt={'20'} mb={'20px'}>
      <Flex justifyContent={'center'} columnGap={'1vw'}>
        {FootLogo.map(({ logo, link }, ind) => (
          <a href={link} target="_blank" key={ind}>
            <Button>{logo}</Button>
          </a>
        ))}
      </Flex>
      <Heading size={'sm'} textAlign={'center'} fontWeight={500} mt={'10px'}>
        © 2023 Your Company. All rights reserved.
      </Heading>
    </Box>
  )
}

export default Footer
