import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      {colorMode === "light" ? (
        <FaMoon onClick={toggleColorMode} cursor="pointer" />
      ) : (
        <FaSun onClick={toggleColorMode} cursor="pointer" />
      )}
    </HStack>
  );
};
export default ColorModeSwitch;
