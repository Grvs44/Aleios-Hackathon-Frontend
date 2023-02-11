import React, { useState, useEffect } from 'react';
import {
  Heading,
  VStack,
  Text,
  Box,
  useColorModeValue,
  Flex,
  Stack,
  Input,
} from '@chakra-ui/react';
import { Navigate, redirect } from 'react-router-dom';
import { getUser } from '../utils/actions';
import Navbar from '../elements/components/Navbar';
import Menu from '../elements/components/Menu';
function Dashboard() {
  // const [isPhone] = useMediaQuery('(max-width: 50em)');
  // let navigate = useNavigate();
  const bg = useColorModeValue('gray.100', 'gray.900');

  const user = getUser();
  if (!user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Box display="flex" bg={bg}>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        overflow="hidden"
        minH="100vh"
      >
        <Stack justify={'center'} align="center" h="full">
          <Heading>Hi, {user ? user : 'User'}</Heading>
          <Menu />
        </Stack>
      </Box>
    </Box>
  );
}

export default Dashboard;
