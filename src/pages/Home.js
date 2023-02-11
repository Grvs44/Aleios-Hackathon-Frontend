import React from 'react';
import {
  Heading,
  VStack,
  Text,
  Flex,
  Box,
  useMediaQuery,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../elements/ColorModeSwitcher';
import { useNavigate, Navigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
function Home() {
  const navigate = useNavigate();
  const user = getUser();
  if (user) {
    return <Navigate to={'/dashboard'} />;
  }

  return (
    <Box>
      <VStack h="100vh">
        <Flex p={[2, 4]} justify={'space-between'} w="full">
          <Button variant={'unstyled'} onClick={() => navigate('/')}>
            Home
          </Button>
          <ColorModeSwitcher />
        </Flex>
        <Stack h={'full'} w=" full" pt="8%">
          <Stack align={'center'} spacing="16">
            <Box textAlign={'center'}>
              <Heading>Better Tommorow</Heading>
              <Text>Little difference Today, Huge Impact Tommorow</Text>
            </Box>

            <Button size={'lg'} onClick={() => navigate('signup')}>
              Join
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Home;
