import React, { useRef, useEffect, useState } from 'react';
import { VStack, Text, Box, Stack } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from 'html5-qrcode';

// To use Html5Qrcode (more info below)
import Navbar from '../elements/components/Navbar';

function Scan() {
  const barcodeReaderRef = useRef(null);
  const [first, setfirst] = useState('No data');

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      setfirst(decodedText);
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }
    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }
    const html5QrcodeScanner = new Html5QrcodeScanner(
      'barcodereader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    return () => {
      console.log(barcodeReaderRef);
    };
  });

  const user = getUser();
  if (!user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Box>
      <VStack h="100vh">
        <Navbar back />
        <Stack h={'full'} w=" full" pt="8%">
          <Text textAlign={'center'}>Scan your barcode </Text>
          <Stack align={'center'} spacing="16">
            <Box textAlign={'center'} boxSize="80">
              <div
                ref={barcodeReaderRef}
                id="barcodereader"
                width="600px"
              ></div>
              <Text>{first}</Text>
            </Box>
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Scan;
