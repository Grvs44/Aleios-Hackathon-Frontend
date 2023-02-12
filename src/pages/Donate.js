import React, { useState } from 'react';
import {
  Heading,
  Text,
  Image,
  Badge,
  Center,
  Box,
  Button,
  Textarea,
  Input,
  Collapse,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import Floppa from '../elements/assets/Floppa.jpeg';
import { Navigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
import Navbar from '../elements/components/Navbar';
import Boots from '../elements/assets/boots.jpeg';

function Donate() {
  // const [isPhone] = useMediaQuery('(max-width: 50em)');
  const [openAccordion, setAccordion] = useState(false);
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
        {' '}
        <Navbar back />
        <Stack justify={'center'} align="center" h="100%">
          <Button
            size={'lg'}
            onClick={() => {
              setAccordion(!openAccordion);
            }}
            bg="brown"
          >
            Donate!
          </Button>
          <Collapse in={openAccordion} animateOpacity>
            <Stack spacing="10px" px="5%">
              <Input placeholder="Product" name="title" />
              <Textarea placeholder="description" width="full" />

              <Button colorScheme="telegram">Donate</Button>
            </Stack>
          </Collapse>
          <Center py={6}>
            <Box boxShadow={'lg'} rounded={'lg'} textAlign={'center'}>
              <Image
                src={Boots}
                alt={`Picture of floppa`}
                boxSize={40}
                roundedTop="lg"
                w="full"
                h={'220px'}
                fit="cover"
              />
              <Stack p={6} spacing={4}>
                <Heading fontFamily={'body'}>Product</Heading>
                <Text textAlign={'center'} px={3}>
                  Gettiing new boots. I want to donate my old ones
                </Text>
                <Stack
                  align={'center'}
                  justify={'center'}
                  direction={'row'}
                  mt={6}
                >
                  <Badge px={2} py={1} fontWeight={'400'}>
                    #Items
                  </Badge>
                  <Badge px={2} py={1} fontWeight={'400'}>
                    #Boots
                  </Badge>
                </Stack>
                <Text fontSize={'md'} textAlign={'center'} px={3}>
                  People interested:
                </Text>
                <ul style={{ listStyle: 'none' }}>
                  <li>Admin1 : admin1@yahoo.com</li>
                  <li>Test1 : Test1@yahoo.com</li>
                </ul>
              </Stack>
            </Box>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
}

export default Donate;
