import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Card({ data }) {
  const [first, setfirst] = useState(data.interested);
  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'lg'}
        textAlign={'center'}
      >
        <Image
          src={data.image}
          alt={`Picture of ${data.product}`}
          boxSize={40}
          roundedTop="lg"
          w="full"
          h={'220px'}
          fit="cover"
        />
        <Stack p={6} spacing={4}>
          <Heading fontFamily={'body'}>{data.product}</Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {data.description}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {data.tags.map(tag => {
              return (
                <Badge px={2} py={1} fontWeight={'400'}>
                  #{tag}
                </Badge>
              );
            })}
          </Stack>
          <Text
            fontSize={'md'}
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            People interested: {first}
          </Text>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              onClick={() => setfirst(first + 1)}
            >
              Interested
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Comment
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
