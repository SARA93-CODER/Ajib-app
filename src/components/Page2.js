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
} from "@chakra-ui/react";
import React from "react";
import Background from "../images/background.jpg";
import Logo from "../images/logo.png";
import Weather from "../images/weather.png";

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
          border={"4px"}
          borderColor="white"
          rounded={"md"}
          boxSize="fit-content"
          bg={useColorModeValue("white", "gray.800")}
          // shadow="2xl"
          // borderWidth="4px"
        >
          <Grid
            spacing="0"
            templateColumns="repeat(4, 0fr)"
            templateRows="repeat(2, 0fr)"
          >
            <Box
              w="52"
              h="40"
              bgGradient="linear(to-b, blue.100, blue.50)"
              borderWidth="thin"
              borderColor={"blue.600"}
              py="4"
              px={"8"}
            >
              <Stack spacing={"4"}>
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
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default Page2;
