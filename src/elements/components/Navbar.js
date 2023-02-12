import React from 'react';
import { Flex, useColorModeValue, chakra, Image } from '@chakra-ui/react';
import logo from '../assets/favicon.ico';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BackButton } from './BackButton';
const Navbar = ({ back }) => {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        pos={'fixed'}
        zIndex="popover"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            {back ? (
              <BackButton />
            ) : (
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <Image src={logo} boxSize={10} />
              </chakra.a>
            )}
          </Flex>
          <ColorModeSwitcher />
          {/* <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                Home
              </Button>
              <Button variant="ghost" onClick={() => console.log('Testing')}>
                Testing
              </Button>
             
              <Button
                onClick={() => {
                  removeUser();
                  removeToken();

                  navigate('/');
                }}
              >
                Log out
              </Button>
            </HStack>

            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                zIndex="popover"
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => navigate('/dashboard')}
                >
                  Home
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => console.log('Testing')}
                >
                  Testing
                </Button>

                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => {
                    removeUser();
                    removeToken();
                    navigate('/');
                  }}
                >
                  Log out
                </Button>
              </VStack>
            </Box>
          </HStack> */}
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
