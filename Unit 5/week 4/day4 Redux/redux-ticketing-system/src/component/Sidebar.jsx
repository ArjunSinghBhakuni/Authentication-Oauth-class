import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  let isAuth = useSelector((state)=>state.AuthReducer.isAuth);

  return (
     <Box border="1px solid red" w='250px'
     h='100vh'>
<Stack direction='column'>
 <Box h="15vh" border='1px solid red'></Box>
 <Box h="70vh" border='1px solid blue'>
  <Flex direction="column">

  <Box border="1px solid green">
   <Flex justifyContent="space-between" p='0 10px' >
    <Text>All</Text>
    <Text>4</Text>
   </Flex>
  </Box>
  <Box border="1px solid green">
   <Flex justifyContent="space-between" p='0 10px' >
    <Text>All</Text>
    <Text>4</Text>
   </Flex>
  </Box>
  <Box border="1px solid green">
   <Flex justifyContent="space-between" p='0 10px' >
    <Text>All</Text>
    <Text>4</Text>
   </Flex>
  </Box>
  <Box border="1px solid green">
   <Flex justifyContent="space-between" p='0 10px' >
    <Text>All</Text>
    <Text>4</Text>
   </Flex>
  </Box>
  </Flex>
 </Box>
 <Box h="10vh" border='1px solid red'>
  <Button w='100%' > {isAuth && "Logout"}</Button>
 </Box>
 
</Stack>

     </Box>
  )
}

export default Sidebar