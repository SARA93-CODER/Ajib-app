import {
  Box,
  Circle,
  Grid,
  Heading,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Background from "../images/background.jpg";
import Logo from "../images/logo.png";
import Weather from "../images/weather.png";
import {
  Balance,
  CashDeposit,
  CashDrawal,
  ChequeBook,
  CreditCard,
  Exit,
  InternalTransfare,
  Other,
} from "./assets";

// import {
//   Balance,
//   CashDeposit,
//   CashDrawal,
//   ChequeBook,
//   CreditCard,
//   Exit,
//   InternalTransfare,
//   Other,
// } from "./assets/icon";

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
          <Stack>
            <Box
              fontSize="sm"
              textColor="white"
              // justifyContent={"end"}
              // textAlign="end"
              // justifyItems={"end"}
            >
              August 28,10.20
            </Box>
            <Box fontWeight="semibold" textColor="white" textAlign={"end"}>
              24&deg; C
            </Box>
          </Stack>
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

      {/* Page Content */}

      <Box pl="60" mb={"5"}>
        <Heading
          as="h1"
          size="lg"
          color="white"
          fontFamily="sans-serif"
          py={"5"}
          fontWeight="normal"
        >
          Please select a Transaction
        </Heading>
        <Box
          border={"4px"}
          borderColor="white"
          rounded={"md"}
          boxSize="fit-content"
          bg={useColorModeValue("white", "gray.800")}
          // shadow="2xl"
          // borderWidth="4px"
        >
          <Grid spacing="0" templateColumns="repeat(4, 0fr)">
            <Box
              w="72"
              h="40"
              bg="white"
              roundedTopLeft="md"
              opacity="80%"
              bgGradient="linear(to-t,yellow.500 , yellow.300 )"
              bgColor={"yellow.500/80"}
              borderWidth="thin"
              borderColor={"blue.600"}
              py="10"
              px={"8"}
            >
              <HStack>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <CashDrawal />
                </Circle>
                <Stack
                  textColor={"white"}
                  fontWeight="normal"
                  fontSize={"x-large"}
                  spacing="0.5"
                  pl="2"
                >
                  <Box textAlign={"start"}>Cash </Box>
                  <Box>Withdrawal</Box>
                </Stack>
              </HStack>
            </Box>

            <Box
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
            >
              <VStack spacing={"4"}>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <Balance />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"small"}>
                  Balance Inquiry
                </Text>
              </VStack>
            </Box>

            <Box
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
            >
              <VStack spacing={"4"}>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <CreditCard />
                </Circle>

                <Box
                  color="blue.600"
                  fontWeight="semibold"
                  fontSize={"small"}
                  textAlign="start"
                  w="full"
                >
                  Credit Card Settlement
                </Box>
              </VStack>
            </Box>

            <Box
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
            >
              <VStack spacing={"4"}>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <Other />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"small"}>
                  Other
                </Text>
              </VStack>
            </Box>

            <Box
              w="72"
              h="40"
              bg="white"
              // p="6"
              roundedBottomLeft="md"
              bgColor={"yellow.500"}
              opacity="80%"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="10"
              px={"8"}
            >
              <HStack>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <CashDeposit />
                </Circle>
                <Stack
                  textColor={"white"}
                  fontWeight="normal"
                  fontSize={"x-large"}
                  spacing="0.5"
                  pl="2"
                  // textAlign={"start"}
                >
                  <Box textAlign={"start"}>Cash</Box>
                  <Box> Deposit</Box>
                </Stack>
              </HStack>
            </Box>

            <Box
              w="52"
              h="40"
              bgGradient="linear(to-t, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
            >
              <VStack spacing={"4"}>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <InternalTransfare />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"small"}>
                  Internal Transfare
                </Text>
              </VStack>
            </Box>

            <Box
              w="52"
              h="40"
              bgGradient="linear(to-t, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
            >
              <VStack>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <ChequeBook />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"small"}>
                  Cheque Book Request
                </Text>
              </VStack>
            </Box>

            <Box
              w="52"
              h="40"
              bgGradient="linear(to-t, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
            >
              <VStack>
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.200, yellow.500)"
                  color="white"
                  border={"4px"}
                >
                  <Exit />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"small"}>
                  Exit/Take Card
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}

      <HStack color="white" gap="2" justifyContent={"center"} pt="10">
        <HStack>
          <Box textColor={"yellow.500"} opacity="90%">
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
