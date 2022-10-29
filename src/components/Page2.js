import {
  Box,
  Circle,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Background from "../images/background.jpg";
import Logo from "../images/logo.png";
import Weather from "../images/weather.png";
import {
  Back,
  ChequeDeposit,
  EFAWATEER,
  Exit,
  MiniStatement,
  PINchange,
  PINunlock,
} from "./assets";

const Page2 = () => {
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
          rounded={"md"}
          boxSize="fit-content"
          bg={useColorModeValue("white", "gray.800")}
          border={"4px"}
          borderColor="white"
          // boxShadow="2xl"
        >
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={0}
          >
            <GridItem
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
              rowSpan={1}
              colSpan={1}
            >
              <Stack spacing={"4"} px="7">
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.400, yellow.500)"
                  color="white"
                  border={"4px"}
                  opacity="85%"
                >
                  <PINunlock />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"small"}>
                  PIN Unlock
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
              rowSpan={1}
              colSpan={1}
            >
              <Stack
                spacing={"4"}
                justifyContent="center"
                justifyItems={"center"}
                px="7"
              >
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.400, yellow.500)"
                  color="white"
                  border={"4px"}
                  opacity="85%"
                >
                  <EFAWATEER />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"11px"}>
                  eFAWATEERcom
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
              rowSpan={1}
              colSpan={1}
            >
              <Stack spacing={"4"} px="7">
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.400, yellow.500)"
                  color="white"
                  border={"4px"}
                  opacity="85%"
                >
                  <Exit />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"12px"}>
                  Exit/ Take Card
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="52"
              h="80"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
              rowSpan={"2"}
              colSpan={""}
            >
              <Stack spacing={"4"} px="7" py="12">
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.400, yellow.500)"
                  color="white"
                  border={"4px"}
                  opacity="85%"
                >
                  <Back />
                </Circle>

                <Text
                  color="blue.600"
                  fontWeight="semibold"
                  fontSize={"md"}
                  textAlign="center"
                  pt={"2"}
                >
                  Back
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
              rowSpan={1}
              colSpan={1}
            >
              <Stack spacing={"4"} px="7">
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.400, yellow.500)"
                  color="white"
                  border={"4px"}
                  opacity="85%"
                >
                  <MiniStatement />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"12px"}>
                  Mini Statement
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
              rowSpan={1}
              colSpan={1}
            >
              <Stack spacing={"4"} px="7">
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.400, yellow.500)"
                  color="white"
                  border={"4px"}
                  opacity="85%"
                >
                  <PINchange />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"12px"}>
                  PIN Change
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
              rowSpan={1}
              colSpan={1}
            >
              <Stack spacing={"4"} px="7">
                <Circle
                  size="80px"
                  bgGradient="linear(to-t, yellow.500, yellow.400, yellow.500)"
                  color="white"
                  border={"4px"}
                  opacity="85%"
                >
                  <ChequeDeposit />
                </Circle>

                <Text color="blue.600" fontWeight="semibold" fontSize={"11px"}>
                  Cheque Deposit
                </Text>
              </Stack>
            </GridItem>
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

export default Page2;
