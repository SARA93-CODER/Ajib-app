import {
  Box,
  Center,
  Grid,
  Heading,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Background from "../images/background.jpg";
import Logo from "../images/logo.png";
import Weather from "../images/weather.png";
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
    <Stack
      bgImage={Background}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}
      height="full"
      py={"2"}
    >
      <HStack spacing="340px" px="5">
        <Stack>
          <Image src={Logo} h="16" w="72" />
        </Stack>

        <Stack h="80px" w="350px" bg="transparent" alignItems="center">
          <Heading
            fontSize="x-large"
            color="yellow.500"
            fontWeight={"semibold"}
            mt="2"
          >
            Welcome
          </Heading>
          <Box textColor="white">Mr. Name Surname</Box>
        </Stack>

        <HStack h="80px" w="400px" bg="transparent">
          <VStack>
            <Text
              fontSize="sm"
              textColor="white"
              // justifyContent={"end"}
              // textAlign="end"
              // justifyItems={"end"}
            >
              August 28,10.20
            </Text>
            <Text
              fontWeight="semibold"
              textColor="white"
              // justifyContent={"end"}
            >
              24&deg; C
            </Text>
          </VStack>
          <Image src={Weather} h="80px" w="30" />
        </HStack>
      </HStack>
      <Progress
        // mb="2"
        colorScheme="yellow"
        size="sm"
        value={50}
        background="blue.500"
      />
      <Box pl="60" mb={"5"}>
        <Heading
          as="h1"
          size="lg"
          color="white"
          fontFamily="sans-serif"
          py={"6"}
          fontWeight="normal"
        >
          Please select a Transaction
        </Heading>
        <Box>
          <Grid spacing="0" templateColumns="repeat(4, 0fr)">
            <Center
              w="72"
              h="40"
              bg="white"
              // p="6"
              roundedTopLeft="md"
              opacity="80%"
              bgGradient="linear(to-t,yellow.500 , yellow.300 )"
              bgColor={"yellow.500/80"}
              borderWidth="thin"
              borderColor={"blue.600"}
            >
              <HStack>
                {/* <Box
                  border={"white"}
                  borderRadius="3xl"
                  rounded="full"
                  bg={"yellow.500"}
                  h="80px"
                  w="80px"
                > */}
                <CashDrawal />
                {/* </Box> */}
                <VStack
                  textColor={"white"}
                  fontWeight="normal"
                  fontSize={"x-large"}
                  spacing="0.5"
                >
                  <Box>Cash </Box>
                  <Box>Withdrawal</Box>
                </VStack>
              </HStack>
            </Center>

            <Center
              w="52"
              h="40"
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
              w="52"
              h="40"
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
              w="52"
              h="40"
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
              w="72"
              h="40"
              bg="white"
              p="6"
              roundedBottomLeft="md"
              bgColor={"yellow.500"}
              opacity="80%"
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
              w="52"
              h="40"
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
              w="52"
              h="40"
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
              w="52"
              h="40"
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

      {/* Footer */}

      <HStack color="white" gap="2" justifyContent={"center"} pt="10">
        <HStack>
          <Box textColor={"yellow.600"} opacity="90%">
            <FaPhoneAlt />
          </Box>
          <Text>Contact Center:</Text>
          <Text textColor={"yellow.500"}>065003005</Text>
        </HStack>
        <HStack>
          <Text>Website: </Text>
          <Text textColor={"yellow.500"}>www.ajib.com</Text>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Page1;
