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
import { getName, getUser } from '../utils/actions';
import CardContainer from '../elements/components/Card';
import SnapContainer from '../elements/components/SnapContainer';
import { BackButton } from '../elements/components/BackButton';
import Navbar from '../elements/components/Navbar';
import { dataList } from '../mock/data';
function Find() {
  const bg = useColorModeValue('gray.100', 'gray.900');

  const user = getUser();
  const name = getName();
  if (!user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      h="100vh"
      overflowY={'scroll'}
      scrollSnapType="y mandatory"
    >
      <Navbar back={true} /> <Heading>Donations</Heading>
      {dataList.map(data => {
        return (
          <SnapContainer>
            <Stack align={'center'} justifyContent="center" h="90%">
              <CardContainer data={data} />
            </Stack>
          </SnapContainer>
        );
      })}
    </Box>
  );
}

export default Find;
