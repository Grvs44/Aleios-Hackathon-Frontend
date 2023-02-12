import React, { useState, useEffect } from 'react';
import {
  Heading,
  VStack,
  Text,
  HStack,
  Textarea,
  Image,
  FormControl,
  Badge,
  Button,
  Th,
  Td,
  Center,
  useToast,
  Input,
  Box,
  useColorModeValue,
  Flex,
  Stack,
  InputGroup,
  Select,
  Collapse,
} from '@chakra-ui/react';
import { FaFolderOpen, FaIdCard, FaPlus, FaTrash } from 'react-icons/fa';
import Floppa from '../elements/assets/Floppa.jpeg';
import { Navigate, redirect } from 'react-router-dom';
import { getName, getUser } from '../utils/actions';
import Menu from '../elements/components/Menu';
import Navbar from '../elements/components/Navbar';
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
          <Heading>Donate</Heading>
          <Center py={6}>
            <Box boxShadow={'lg'} rounded={'lg'} textAlign={'center'}>
              <Image
                src={Floppa}
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
                  Gettiing new boots. I want to donate the old ones
                </Text>
                <Stack
                  align={'center'}
                  justify={'center'}
                  direction={'row'}
                  mt={6}
                >
                  <Badge px={2} py={1} fontWeight={'400'}>
                    #tag
                  </Badge>
                </Stack>
                <Text fontSize={'md'} textAlign={'center'} px={3}>
                  People interested:
                </Text>
                <ul style={{ listStyle: 'none' }}>
                  <li>Admin1 : admin1@yahoo.com</li>
                  <li>Admin2 : admin2@yahoo.com</li>
                  <li>Admin3 : admin3@yahoo.com</li>
                </ul>
              </Stack>
            </Box>
          </Center>
          {/* <Button
            onClick={() => {
              setAccordion(!openAccordion);
            }}
          >
            Open
          </Button>
          <Collapse in={openAccordion} animateOpacity>
            <Stack spacing="10px" px="5%">
              <Input placeholder="Product" name="title" />
              <Textarea placeholder="description" width="full" />

              <Button colorScheme="telegram">Donate</Button>
            </Stack>
          </Collapse> */}
        </Stack>
      </Box>
    </Box>
  );
}

export default Donate;
