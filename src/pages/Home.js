import React from 'react';
import {
  VStack,
  Text,
  Flex,
  Box,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../elements/components/ColorModeSwitcher';
import { useNavigate, Navigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
import AnimatedHeading from '../elements/components/AnimatedHeading';
import logo from '../elements/assets/favicon.ico';
import './css/signup.css';

function Home() {
  const navigate = useNavigate();
  const user = getUser();
  if (user) {
    return <Navigate to={'/dashboard'} />;
  }

  return (
    <Box
    //className="gradient-background"
    >
      <VStack h="100vh">
        <Flex p={[2, 4]} justify={'space-between'} w="full">
          <Button variant={'unstyled'} onClick={() => navigate('/')}>
            <Image src={logo} boxSize={10} />
          </Button>
          <ColorModeSwitcher />
        </Flex>
        <Stack h={'full'} w=" full" pt="8%">
          <Stack align={'center'} spacing="16">
            <Box textAlign={'center'}>
              <AnimatedHeading />
              <Text>Little difference Today, Huge Impact Tommorrow</Text>
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
