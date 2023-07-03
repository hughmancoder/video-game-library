import { HStack, Image, Text } from "@chakra-ui/react";
// import logo from "../assets/react.svg";
import logo from "../assets/retro-computer-icon-isolated.png";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};
