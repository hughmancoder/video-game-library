import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/retro-computer-icon-isolated.png";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};
