import React, { useState, useEffect, Component } from 'react';
import { VStack, Text, Box, useMediaQuery, Stack } from '@chakra-ui/react';
import { useNavigate, Navigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
import BarcodeReader from 'react-barcode-reader';

function Scan() {
  const [data, setData] = React.useState('Not Found');
  let navigate = useNavigate();
  const user = getUser();
  if (!user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Box>
      <VStack h="100vh">
        <Stack h={'full'} w=" full" pt="8%">
          <Text textAlign={'center'}>Scan your barcode </Text>
          <Stack align={'center'} spacing="16">
            <Box textAlign={'center'} boxSize="80">
              <BarcodeReader on />
              <p>{data}</p>
            </Box>
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Scan;
