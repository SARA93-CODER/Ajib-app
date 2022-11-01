import { Button, Center, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Center w={"full"} h="screen" py={"200px"}>
      <Wrap spacing={4}>
        <WrapItem>
          <Link to="/Page1">
            <Button colorScheme="linkedin">Page 1</Button>
          </Link>
        </WrapItem>

        <WrapItem>
          <Link to="/Page2">
            <Button colorScheme="linkedin">Page 2</Button>
          </Link>
        </WrapItem>
      </Wrap>
    </Center>
  );
};
