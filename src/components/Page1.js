import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
// import { Logo } from "../images/Logo";

// import Logo from "../images/logo.jpg";
// import Weather from "../images/weather.jpg";
import {
  CashDeposit,
  CashDrawal,
  CreditCard,
  Exit,
  Other,
} from "./assets/icon";
import Balance from "./assets/icon/Balance";
import ChequeBook from "./assets/icon/ChequeBook";
import InternalTransfare from "./assets/icon/InternalTransfare";

const Page1 = () => {
  return (
    <VStack

    // bgImage="url('/images/background.jpg')"
    // bgPosition="center"
    // bgRepeat="no-repeat"
    >
      <HStack w="full" spacing="300px" py="2" px="5">
        <Box h="100px" w="300px" bg="transparent" py="7">
          {/* <Image src={Logo} /> */}
          {/* <Logo /> */}
        </Box>
        <VStack h="100px" w="300px" bg="transparent" alignItems="center" py="2">
          <Heading fontSize="x-large" color="yellow.600">
            Welcome
          </Heading>
          <Text>Mr. Name Surname</Text>
        </VStack>
        <Box h="100px" w="270px" bg="transparent">
          <HStack>
            <VStack>
              <Box fontSize="sm">August 28,10.20</Box>
              <Box fontWeight="semibold">24&deg; C</Box>
            </VStack>
            <Box>
              {/* <Image src={Weather} /> */}
            </Box>

            {/* <Weather /> */}
          </HStack>
        </Box>
      </HStack>
      <Progress
        my="2"
        colorScheme="yellow.500"
        size="sm"
        value={50}
        background="blue.500"
      />
      <Box spacing={6} pl="44" w="100%" mb="10">
        <Heading as="h1" size="lg" color="white" fontFamily="sans-serif" my="8">
          Please select a Transaction
        </Heading>
        <Box>
          <Grid spacing="0" templateColumns="repeat(4, 0fr)" w="full">
            <Center
              w="80"
              h="44"
              bg="white"
              p="6"
              roundedTopLeft="md"
              bgColor={"yellow.500"}
              opacity="75%"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <HStack>
                <Box>
                  <CashDrawal />
                </Box>
                <VStack
                  textColor={"white"}
                  fontWeight="normal"
                  fontSize={"x-large"}
                  spacing="0.5"
                  justify={"start"}
                >
                  <Box>Cash </Box>
                  <Box>Withdrawal</Box>
                </VStack>
              </HStack>
            </Center>

            <Center
              w="64"
              h="44"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <VStack>
                <Balance />
                <Text color="blue.600" fontWeight="semibold">
                  Balance Inquiry
                </Text>
              </VStack>
            </Center>

            <Center
              w="64"
              h="44"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <VStack>
                <CreditCard />
                <Text color="blue.600" fontWeight="semibold">
                  Credit Card Settlement
                </Text>
              </VStack>
            </Center>

            <Center
              w="64"
              h="44"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <VStack>
                <Other />
                <Text color="blue.600" fontWeight="semibold">
                  Other
                </Text>
              </VStack>
            </Center>

            <Center
              w="80"
              h="44"
              bg="white"
              p="6"
              roundedBottomLeft="md"
              bgColor={"yellow.500"}
              opacity="75%"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <HStack>
                <Box>
                  <CashDeposit />
                </Box>
                <VStack>
                  <Box>Cash</Box>
                  <Box> Deposit</Box>
                </VStack>
              </HStack>
            </Center>

            <Center
              w="64"
              h="44"
              bgGradient="linear(to-t, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <VStack>
                <InternalTransfare />
                <Text color="blue.600" fontWeight="semibold">
                  Internal Transfare
                </Text>
              </VStack>
            </Center>

            <Center
              w="64"
              h="44"
              bgGradient="linear(to-t, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <VStack>
                <ChequeBook />
                <Text color="blue.600" fontWeight="semibold">
                  Cheque Book Request
                </Text>
              </VStack>
            </Center>

            <Center
              w="64"
              h="44"
              bgGradient="linear(to-t, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <VStack>
                <Exit />
                <Text color="blue.600" fontWeight="semibold">
                  Exit/Take Card
                </Text>
              </VStack>
            </Center>
          </Grid>
        </Box>
      </Box>
      {/* Footer : */}
      <Flex color="white" gap="6">
        <Box>
          <FiPhoneCall />
          <Text>Contact Center</Text>
        </Box>
        <Box>
          <Text>Website: </Text>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Page1;
