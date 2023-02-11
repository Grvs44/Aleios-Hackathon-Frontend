import React, { useState, useEffect } from 'react';
import {
  Heading,
  VStack,
  Text,
  Box,
  useMediaQuery,
  HStack,
  Stack,
  Input,
} from '@chakra-ui/react';
import { Navigate, redirect } from 'react-router-dom';
import { getUser } from '../utils/actions';
import Navbar from '../elements/Navbar';
function Dashboard() {
  // const [isPhone] = useMediaQuery('(max-width: 50em)');
  // let navigate = useNavigate();
  const user = getUser();
  if (!user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Box>
      <VStack h="100vh">
        <Navbar />

        <Stack h={'full'} w=" full" pt="8%">
          <Stack align={'center'} spacing="16">
            <Box textAlign={'center'}>
              <Heading>Hi, {user ? user : 'User'}</Heading>
            </Box>
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Dashboard;
