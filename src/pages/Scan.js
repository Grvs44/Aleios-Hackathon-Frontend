import React, { useState, useEffect } from 'react';
import { VStack, Text, Box, useMediaQuery, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../elements/Navbar';
import { getUser } from '../utils/actions';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

function Scan() {
  const [isPhone] = useMediaQuery('(max-width: 50em)');
  let navigate = useNavigate();
  const user = getUser();
  if (!user) navigate('/login');
  const [data, setData] = React.useState('Not Found');

  return (
    <Box>
      <VStack h="100vh">
        <Navbar />
        <Stack h={'full'} w=" full" pt="8%">
          <Text textAlign={'center'}>Scan your barcode </Text>
          <Stack align={'center'} spacing="16">
            <Box textAlign={'center'} boxSize="80">
              <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                  if (result) setData(result.text);
                  else setData('Not Found');
                }}
              />
              <p>{data}</p>
            </Box>
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Scan;
