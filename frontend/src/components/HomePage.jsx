import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  VStack,
  useMultiStyleConfig,
  useTab,
} from '@chakra-ui/react'
import React from 'react'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'
import logo8 from '../assets/logo8.jpg'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const HomePage = () => {
  return (
    <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      padding={{ lg: '20px 100px' }}
      mt={'60px'}
      columnGap={'5vw'}
    >
      <Flex m="auto" direction={'column'} rowGap={'5vh'}>
        <Flex>
          <Heading size={{ lg: '3xl', base: '2xl' }}>Getting You</Heading>
          <Image src={logo2} />
        </Flex>

        <Flex columnGap={'1vw'}>
          <Image boxSize={'70px'} src={logo3} />
          <Image src={logo4} boxSize={'70px'} />
          <Heading size={{ lg: '3xl', base: '2xl' }}>where You</Heading>
        </Flex>

        <Flex columnGap={'1vw'}>
          <Heading size={{ lg: '3xl', base: '2xl' }}>Want to study.</Heading>
          <Image boxSize={'70px'} src={logo5} />
        </Flex>

        <Heading w={{ lg: '30vw', sm: '60vw' }} fontWeight={500} size={'md'}>
          Everything you need to know for your study abroad journey: from first
          search to your first day on campus.
        </Heading>
        <CustomTabs />
      </Flex>

      <VStack rowGap={'8vh'} mt={{ base: '50px' }}>
        <Box
          bg={'#6a1b9a'}
          boxShadow="xl"
          rounded={'2xl'}
          padding={'10px 20px'}
        >
          <Image w={{ lg: '30vw', base: '50vw' }} m="auto" src={logo6} />
        </Box>
        <Flex columnGap={'20px'}>
          <Box>
            <Image src={logo7} />
          </Box>
          <Box>
            <Image boxShadow="2xl" rounded={'2xl'} src={logo8} />
          </Box>
        </Flex>
      </VStack>
    </Grid>
  )
}

export default HomePage

function CustomTabs() {
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? '😎' : '😐'}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  return (
    <Tabs boxShadow="2xl" rounded={'2xl'}>
      <TabList>
        <CustomTab>Course</CustomTab>
        <CustomTab>Service</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Input
            placeholder="Add Subject what do you want to buddy"
            size="md"
          />
          <Flex mt={'2vh'}>
            <Input placeholder="Add institutuin or region name" size="md" />
            <Button colorScheme="purple"> {<Search2Icon />} Button</Button>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Input placeholder="Add service" size="md" />
          <Flex mt={'2vh'}>
            <Input placeholder="Add instructions for services" size="md" />
            <Button ml="10px" colorScheme="blue">
              {' '}
              {<Search2Icon />} Button
            </Button>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
